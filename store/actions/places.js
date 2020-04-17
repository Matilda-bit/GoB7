export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const DELETE_PLACE = 'DELETE_PLACE';
export const CREATE_PLACE = 'CREATE_PLACE';
export const UPDATE_PLACE = 'UPDATE_PLACE';

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

export const updatePlace = (id, title, imageUrl) => {
    return {
        type: UPDATE_PPLACE,
        placeId: id,
        placeData: {
          title,
          imageUrl
        }    
    };
  };
  

export const toggleFavorite = (id) => {
    return {type: TOGGLE_FAVORITE, placeId: id};
};

export const setFilters = filterSettings => {
    return {type: SET_FILTERS, filters: filterSettings};
};