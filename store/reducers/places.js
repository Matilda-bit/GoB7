import Place from '../../models/place';

import { PLACE } from '../../data/dummy-data';
import { 
    TOGGLE_FAVORITE, 
    SET_FILTERS, 
    DELETE_PLACE,
    CREATE_PLACE,
    UPDATE_PLACE,
    SET_PLACES
} from '../actions/places';

const initialState = {
    //category: CATEGORIES,
    places: PLACE,
    filteredPlaces: PLACE,
    favoritePlaces: [],
    userPlaces: PLACE.filter(id => id.ownerId === 'u1')
    //userPlaces: []

};

export default (state = initialState, action) => {
   switch (action.type){
        case SET_PLACES:
            return {
                //places: state.places.concat(action.places.filter(id => action.places.id in state.places.id)),
                places: state.places.concat(action.places),
                filteredPlaces: state.places,
                //userPlaces: action.places.filter(id => id.ownerId === 'u1'),
                userPlaces: action.places,
                favoritePlaces: state.favoritePlaces
            };
       
        case CREATE_PLACE:
            const newPlace = new Place(
                action.placeData.id,
                action.placeData.categoryId,
                'u1',
                action.placeData.title,
                action.placeData.imageUrl,
                action.placeData.location,
                action.placeData.openingHours,
                false,
                false
            );
            return {
                ...state,
                places: state.places.concat(newPlace),
                filteredPlaces: state.places,
                //filteredPlaces: state.places.concat(newPlace),
                userPlaces: state.userPlaces.concat(newPlace)
            };
        case UPDATE_PLACE:
            const placeIndex = state.userPlaces.findIndex(
                prod => prod.id === action.id
            );

            const updatedPlace = new Place(
                action.id,
                action.placeData.categoryId,
                'u1',
                action.placeData.title,
                action.placeData.imageUrl,
                action.placeData.location,
                action.placeData.openingHours,
                //state.userPlaces[placeIndex].isOpenShabbath,
                false,
                false

            );

            const updatedUserPlaces = [...state.userPlaces];
            updatedUserPlaces[placeIndex] = updatedPlace;

            const availablePlaceIndex = state.places.findIndex(
                prod => prod.id === action.id
            );
    
            const updatedAvailablePlaces = [...state.places];
            updatedAvailablePlaces[availablePlaceIndex] = updatedPlace;

            // const updatedFilteredPlaces = [...state.filteredPlaces];
            // updatedFilteredPlaces[availablePlaceIndex] = updatedPlace;
             return {
                ...state,
                places: updatedAvailablePlaces,
                filteredPlaces: state.places,
                //filteredPlaces: updatedFilteredPlaces,
                userPlaces: updatedUserPlaces
            };

        case DELETE_PLACE:
           //console.log('DELETE');
            return {
                ...state,
                userPlaces: state.userPlaces.filter(
                place => place.id !== action.id
                ),
                filteredPlaces: state.filteredPlaces.filter(
                place => place.id !== action.id
                ),
                places: state.places.filter(
                place => place.id !== action.id
                )
            };

        case TOGGLE_FAVORITE:
            const existingIndex = state.favoritePlaces.findIndex(place => place.id === action.placeId);
            if (existingIndex >= 0){
                const updateFavPlaces = [...state.favoritePlaces];
                updateFavPlaces.splice(existingIndex, 1);
                return {...state, favoritePlaces: updateFavPlaces };
            }   else {
                    const place = state.places.find(place => place.id === action.placeId);
                    return {...state, favoritePlaces: state.favoritePlaces.concat(place) };
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
    
            const updateFilteredPlaces = state.places.filter(place => {
                if (appliedFilters.openShabbath && !place.isOpenShabbath){
                    return false;
                }
                if (appliedFilters.openNow && !place.isOpenNow){
                    return false;
                }
                // if (appliedFilters.vegan && !place.isVegan){
                //     return false;
                // }
                // if (appliedFilters.vegetarian && !place.isVegetarian){
                //     return false;
                // }
                // if (appliedFilters.kosher && !place.isKosher){
                //     return false;
                // }
                // if (appliedFilters.notKosher && !place.isNotKosher){
                //     return false;
                // }
                // if (appliedFilters.cafe && !place.isCafe){
                //     return false;
                // }
                // if (appliedFilters.restaurant && !place.isRestaurant){
                //     return false;
                // }
                // if (appliedFilters.delivery && !place.isDelivery){
                //     return false;
                // }
                // if (appliedFilters.takeAway && !place.isTakeAway){
                //     return false;
                // }
                // if (appliedFilters.fastFood && !place.isFastFood){
                //     return false;
                // }
                // if (appliedFilters.grill && !place.isGrill){
                //     return false;
                // }
                // if (appliedFilters.sushi && !place.isSushi){
                //     return false;
                // }
                // if (appliedFilters.italian && !place.isItalian){
                //     return false;
                // }
                // if (appliedFilters.asian && !place.isAsian){
                //     return false;
                // }
                // if (appliedFilters.european && !place.isEuropean){
                //     return false;
                // }
                // if (appliedFilters.indian && !place.isIndian){
                //     return false;
                // }
                return true;
            });
            
        return {...state, filteredPlaces: updateFilteredPlaces};
        
        
        // default: 
        //     return state;
    }
    return state;
};

