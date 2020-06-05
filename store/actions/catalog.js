// import Place from "../../models/place";
// //my actions
// export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
// export const SET_FILTERS = "SET_FILTERS";

// export const SET_PLACES = "SET_PLACES";

// // export const toggleFavorite = (id) => {
// //     return {type: TOGGLE_FAVORITE, placeId: id};
// // };
// export const fetchPlaces = () => {
//   return async (dispatch, getState) => {
//     const userId = getState().auth.userId;
//     // any async code you want!
//     //method: 'GET',
//     //don't need 'header' and 'body' anymore
//     try {
//       const response = await fetch(
//         `https://my-project-fdbf6.firebaseio.com/places/${userId}.json`
//       );

//       //
//       if (!response.ok) {
//         throw new Error("Polina something went wrong!");
//       }
//       //unpacked data
//       const resData = await response.json();
//       //console.log(resData);
//       const loadedPlaces = [];

//       for (const key in resData) {
//         loadedPlaces.push(
//           new Place(
//             key,
//             resData[key].categoryId,
//             "u1",
//             resData[key].title,
//             resData[key].imageUrl,
//             resData[key].location,
//             resData[key].openingHours,
//             false,
//             false
//           )
//         );
//       }
//       //console.log(resData);
//       dispatch({ type: SET_PLACES, places: loadedPlaces });
//     } catch (err) {
//       // can to add - send to custom analytics server
//       throw err;
//     }
//   };
// };

// export const toggleFavorite = (id) => {
//   return async (dispatch) => {
//     const date = new Date();

//     const response = await fetch(
//       "https://my-project-fdbf6.firebaseio.com/favorite/u1.json?",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id,
//           date: date.toISOString(),
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Something went wrong! catch toggleFavorite");
//     }

//     const resData = await response.json();

//     dispatch({
//       type: TOGGLE_FAVORITE,
//       placeId: id,
//       orderData: {
//         id: resData.name,
//       },
//     });
//   };
// };

// export const setFilters = (filterSettings) => {
//   return { type: SET_FILTERS, filters: filterSettings };
// };
