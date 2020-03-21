
import { PLACE } from '../../data/dummy-data';

const initialState = {
    places: PLACE,
    folteredPlaces: PLACE,
    favoritePlaces: []

};


const placesReducer = (state = initialState, action) => {
    return state;
};

export default placesReducer;