// import { TOGGLE_FAVORITE, SET_FILTERS, SET_PLACES } from "../actions/catalog";

// import { PLACE } from "../../data/dummy-data";

// const initialState = {
//   places: PLACE,
//   filteredPlaces: PLACE,
//   favoritePlaces: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case SET_PLACES:
//       return {
//         filteredPlaces: PLACE.concat(action.places),
//         favoritePlaces: state.favoritePlaces,
//       };
//     case TOGGLE_FAVORITE:
//       const existingIndex = state.favoritePlaces.findIndex(
//         (place) => place.id === action.placeId
//       );
//       if (existingIndex >= 0) {
//         const updateFavPlaces = [...state.favoritePlaces];
//         updateFavPlaces.splice(existingIndex, 1);
//         return { ...state, favoritePlaces: updateFavPlaces };
//       } else {
//         const place = state.places.find((place) => place.id === action.placeId);
//         return { ...state, favoritePlaces: state.favoritePlaces.concat(place) };
//       }
//     case SET_FILTERS:
//       const appliedFilters = action.filters;

//       const updateFilteredPlaces = state.filteredPlaces.filter((place) => {
//         if (appliedFilters.openShabbath && !place.isOpenShabbath) {
//           return false;
//         }
//         if (appliedFilters.openNow && !place.isOpenNow) {
//           return false;
//         }
//         // if (appliedFilters.vegan && !place.isVegan){
//         //     return false;
//         // }
//         // if (appliedFilters.vegetarian && !place.isVegetarian){
//         //     return false;
//         // }
//         // if (appliedFilters.kosher && !place.isKosher){
//         //     return false;
//         // }
//         // if (appliedFilters.notKosher && !place.isNotKosher){
//         //     return false;
//         // }
//         // if (appliedFilters.cafe && !place.isCafe){
//         //     return false;
//         // }
//         // if (appliedFilters.restaurant && !place.isRestaurant){
//         //     return false;
//         // }
//         // if (appliedFilters.delivery && !place.isDelivery){
//         //     return false;
//         // }
//         // if (appliedFilters.takeAway && !place.isTakeAway){
//         //     return false;
//         // }
//         // if (appliedFilters.fastFood && !place.isFastFood){
//         //     return false;
//         // }
//         // if (appliedFilters.grill && !place.isGrill){
//         //     return false;
//         // }
//         // if (appliedFilters.sushi && !place.isSushi){
//         //     return false;
//         // }
//         // if (appliedFilters.italian && !place.isItalian){
//         //     return false;
//         // }
//         // if (appliedFilters.asian && !place.isAsian){
//         //     return false;
//         // }
//         // if (appliedFilters.european && !place.isEuropean){
//         //     return false;
//         // }
//         // if (appliedFilters.indian && !place.isIndian){
//         //     return false;
//         // }
//         return true;
//       });

//       return { ...state, filteredPlaces: updateFilteredPlaces };

//     // default:
//     //     return state;
//   }
//   return state;
// };
