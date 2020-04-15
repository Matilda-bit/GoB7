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
    const id = props.navigation.getParam('id');
  const editedPlace = useSelector(state =>
    state.places.userPlaces.find(prod => prod.id === id)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedPlace ? editedPlace.title : '',
      imageUrl: editedPlace ? editedPlace.imageUrl : ''
    },
    inputValidities: {
      title: editedPlace ? true : false,
      imageUrl: editedPlace ? true : false
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
          formState.inputValues.title,
          // formState.inputValues.description,
          formState.inputValues.imageUrl
        )
      );
    } else {
      dispatch(
        placesActions.createPlace(
          formState.inputValues.title,
          // formState.inputValues.description,
          formState.inputValues.imageUrl
        )
      );
    }
    props.navigation.goBack();
  }, [dispatch, id, formState]);

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
            initialValue={editedPlace ? editedPlace.title : ''}
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
            initialValue={editedPlace ? editedPlace.imageUrl : ''}
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
    headerTitle: navData.navigation.getParam('id')
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