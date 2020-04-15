import { PLACE } from '../../data/dummy-data';
import { 
    TOGGLE_FAVORITE, 
    SET_FILTERS, 
    DELETE_PLACE,
    CREATE_PLACE,
    UPDATE_PLACE 
} from '../actions/places';

const initialState = {
    places: PLACE,
    filteredPlaces: PLACE,
    favoritePlaces: [],
    userPlaces: []

};


const placesReducer = (state = initialState, action) => {
   switch (action.type){
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
                if (appliedFilters.vegan && !place.isVegan){
                    return false;
                }
                if (appliedFilters.vegetarian && !place.isVegetarian){
                    return false;
                }
                if (appliedFilters.kosher && !place.isKosher){
                    return false;
                }
                if (appliedFilters.notKosher && !place.isNotKosher){
                    return false;
                }
                if (appliedFilters.cafe && !place.isCafe){
                    return false;
                }
                if (appliedFilters.restaurant && !place.isRestaurant){
                    return false;
                }
                if (appliedFilters.delivery && !place.isDelivery){
                    return false;
                }
                if (appliedFilters.takeAway && !place.isTakeAway){
                    return false;
                }
                if (appliedFilters.fastFood && !place.isFastFood){
                    return false;
                }
                if (appliedFilters.grill && !place.isGrill){
                    return false;
                }
                if (appliedFilters.sushi && !place.isSushi){
                    return false;
                }
                if (appliedFilters.italian && !place.isItalian){
                    return false;
                }
                if (appliedFilters.asian && !place.isAsian){
                    return false;
                }
                if (appliedFilters.european && !place.isEuropean){
                    return false;
                }
                if (appliedFilters.indian && !place.isIndian){
                    return false;
                }
                return true;
            });
            
        return {...state, filteredPlaces: updateFilteredPlaces};
        case CREATE_PLACE:
            const newPlace = new Place(
                new Date().toString(),
                'u1',
                action.placeData.title,
                action.placeData.imageUrl
            );
            return {
                ...state,
                availablePlaces: state.availablePlaces.concat(newPlace),
                userPlaces: state.userPlaces.concat(newPlace)
            };
        case UPDATE_PLACE:
            const placeIndex = state.userPlaces.findIndex(
                prod => prod.id === action.placeId
            );
            const updatedPlace = new Place(
                action.placeId,
                state.userPlaces[placeIndex].ownerId,
                action.placeData.title,
                action.placeData.imageUrl
            );
            const updatedUserPlaces = [...state.userPlaces];
            updatedUserPlaces[placeIndex] = updatedPlace;
            const availablePlaceIndex = state.availablePlaces.findIndex(
                prod => prod.id === action.placeId
            );
            const updatedAvailablePlaces = [...state.availablePlaces];
            updatedAvailablePlaces[availablePlaceIndex] = updatedPlace;
            return {
                ...state,
                availablePlaces: updatedAvailablePlaces,
                userPlaces: updatedUserPlaces
            };
        case DELETE_PLACE:
            return {
                ...state,
                userPlaces: state.userPlaces.filter(
                place => place.id !== action.placeId
                ),
                availablePlaces: state.availablePlaces.filter(
                place => place.id !== action.placeId
                )
            };
        default: 
            return state;
    }
};

export default placesReducer;