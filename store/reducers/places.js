
import { PLACE } from '../../data/dummy-data';

const initialState = {
    places: PLACE,
    filteredPlaces: PLACE,
    favoritePlaces: []

};


const placesReducer = (state = initialState, action) => {
    return state;
};

export default placesReducer;