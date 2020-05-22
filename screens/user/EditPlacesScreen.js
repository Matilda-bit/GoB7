import React, { useEffect, useCallback, useReducer } from 'react';
import { 
    View,
    ScrollView,
    StyleSheet, 
    Platform,
    Alert,
    KeyboardAvoidingView
 } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as placesActions from '../../store/actions/places';
import Input from '../../components/UI/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

//add new place pop window after action
//and after then navigate to myPlaces Screen => UserPlacesScreen
const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  };

  
const EditPlacesScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  //console.log(catId);
  const id = props.navigation.getParam('placeId');
  //console.log(id);
  const editedPlace = useSelector(state =>
    state.places.userPlaces.find(prod => prod.id === id)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedPlace ? editedPlace.title : '',
      imageUrl: editedPlace ? editedPlace.imageUrl : '',
      location: editedPlace ? editedPlace.location : '',
      openingHours: editedPlace ? editedPlace.openingHours : ''
    },
    inputValidities: {
      title: editedPlace ? true : false,
      imageUrl: editedPlace ? true : false,
      location: editedPlace ? true : false,
      openingHours: editedPlace ? true : false,
    },
    formIsValid: editedPlace ? true : false
  });

  const submitHandler = useCallback(() => {

    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' }
      ]);
      return;
    }
    if (editedPlace) {
      dispatch(
        placesActions.updatePlace(
          id,
          editedPlace.categoryId,
          formState.inputValues.title,
          formState.inputValues.imageUrl,
          formState.inputValues.location,
          formState.inputValues.openingHours
        )
      );
    } else {
      dispatch(
        placesActions.createPlace(
          catId,
          formState.inputValues.title,
          formState.inputValues.imageUrl,
          formState.inputValues.location,
          formState.inputValues.openingHours,
  
        )
      );
    }
    props.navigation.goBack();
  }, [dispatch, catId, id, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="title"
            label="Title"
            errorText="Please enter a valid title!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedPlace ? editedPlace.title : 'Test '}
            initiallyValid={!!editedPlace}
            required
          />
          <Input
            id="imageUrl"
            label="Image Url"
            errorText="Please enter a valid image url!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedPlace ? editedPlace.imageUrl : 'https://s3.amazonaws.com/cb-talent-development-cortex-prod/media/attachments/000/001/682/original/shutterstock_248597491_IntTest.jpg?1452861845'}
            initiallyValid={!!editedPlace}
            required
          />
          <Input
            id="location"
            label="Location"
            errorText="Please enter a valid address!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedPlace ? editedPlace.location : 'Beer Sheva'}
            initiallyValid={!!editedPlace}
            required
          />
          <Input
            id="openingHours"
            label="opening Hours"
            errorText="Please enter a opening hours!"
            keyboardType="default"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedPlace ? editedPlace.openingHours : '24/7'}
            initiallyValid={!!editedPlace}
            required
          />
          {/* <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={3}
            onInputChange={inputChangeHandler}
            initialValue={editedPlace ? editedPlace.description : ''}
            initiallyValid={!!editedPlace}
            required
            minLength={5}
          /> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditPlacesScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('placeId')
      ? 'Edit Place'
      : 'Add Place',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
    form: {
      margin: 20
    }
  });
export default EditPlacesScreen;