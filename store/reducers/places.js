import { PLACE } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/places';

const initialState = {
    places: PLACE,
    filteredPlaces: PLACE,
    favoritePlaces: []

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
        default: 
            return state;
    }
};

export default placesReducer;