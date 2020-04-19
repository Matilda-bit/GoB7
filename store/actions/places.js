import Place from '../../models/place';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
//admin zone
export const DELETE_PLACE = 'DELETE_PLACE';
export const CREATE_PLACE = 'CREATE_PLACE';
export const UPDATE_PLACE = 'UPDATE_PLACE';
//fetch db
//export const SET_PLACES = 'SET_PLACES';

// export const fetchPlaces = () => {
//   return async dispatch => {
//     // any async code you want!
//     //method: 'GET',
//     //don't need 'header' and 'body' anymore
//     const response = await fetch('https://my-project-fdbf6.firebaseio.com/places.json');

//     //unpacked data
//     const resData = await response.json();
//     //console.log(resData);
//     const loadedPlaces = [];

//     for (const key in resData){
//       loadedPlaces.push(
//         new Place(
//           key,
//           [resData[key].categoryId],
//           resData[key].title,
//           'u1',
//           resData[key].imageUrl,
//           resData[key].location,
//           resData[key].openingHours,
//           false,
//           false,
//         )
//       );
//     }
//     dispatch({ type: SET_PLACES, places: loadedPlaces });
//   };
// }; 

export const deletePlace = id => {
    return { type: DELETE_PLACE, placeId: id };
  };
  

  export const createPlace = (categoryId, title, imageUrl, location, openingHours) => {
    return async dispatch => {
      // any async code you want!
      const response = await fetch('https://my-project-fdbf6.firebaseio.com/places.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoryId,
          title,
          imageUrl,
          location,
          openingHours
        })
      });
      //unpacked data
      const resData = await response.json();
      //console.log(resData);
      
      dispatch({
        type: CREATE_PLACE,
        placeData: {
          id: resData.name,
          categoryId,
          title,
          imageUrl,
          location,
          openingHours
          }  
      });  
    };  
  };

export const updatePlace = (id, categoryId, title, imageUrl, location, openingHours) => {
    return {
        type: UPDATE_PLACE,
        placeId: id,
        placeData: {
          id,
          categoryId,
          title,
          imageUrl,
          location,
          openingHours
        }    
    };
  };
  

export const toggleFavorite = (id) => {
    return {type: TOGGLE_FAVORITE, placeId: id};
};

export const setFilters = filterSettings => {
    return {type: SET_FILTERS, filters: filterSettings};
};