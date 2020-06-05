import Place from "../../models/place";
//my actions
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";
//admin zone
export const DELETE_PLACE = "DELETE_PLACE";
export const CREATE_PLACE = "CREATE_PLACE";
export const UPDATE_PLACE = "UPDATE_PLACE";
//fetch db
export const SET_PLACES = "SET_PLACES";

export const fetchPlaces = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        `https://my-project-fdbf6.firebaseio.com/places/UserPlaces/${userId}.json`
      );

      //
      if (!response.ok) {
        throw new Error("Polina something went wrong!");
      }
      //unpacked data
      const resData = await response.json();
      //console.log(resData);
      const loadedPlaces = [];

      for (const key in resData) {
        loadedPlaces.push(
          new Place(
            key,
            resData[key].categoryId,
            resData[key].ownerId,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].location,
            resData[key].openingHours,
            false,
            false
          )
        );
      }
      //console.log(loadedPlaces);
      dispatch({
        type: SET_PLACES,
        places: loadedPlaces,
        userPlaces: loadedPlaces.filter((prop) => prop.ownerId == userId),
      });
    } catch (err) {
      // can to add - send to custom analytics server
      throw err;
    }
  };
};

export const deletePlace = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://my-project-fdbf6.firebaseio.com/places/UserPlaces/${userId}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong! catch deletePlace");
    }
    dispatch({ type: DELETE_PLACE, id: id });
  };
};

export const createPlace = (
  categoryId,
  title,
  imageUrl,
  location,
  openingHours
) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://my-project-fdbf6.firebaseio.com/places/UserPlaces/${userId}.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId,
          title,
          imageUrl,
          location,
          openingHours,
          ownerId: userId,
        }),
      }
    );

    //unpacked data
    const resData = await response.json();
    //console.log(resData);
    if (!response.ok) {
      throw new Error("Something went wrong! catch createPlace");
    }

    dispatch({
      type: CREATE_PLACE,
      placeData: {
        id: resData.name,
        categoryId,
        title,
        imageUrl,
        location,
        openingHours,
        ownerId: userId,
      },
    });
  };
};

export const updatePlace = (
  id,
  categoryId,
  title,
  imageUrl,
  location,
  openingHours
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    //console.log(getState());
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://my-project-fdbf6.firebaseio.com/places/UserPlaces/${userId}/${id}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId,
          title,
          imageUrl,
          location,
          openingHours,
          ownerId: userId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong! catch updatePlace");
    }

    dispatch({
      type: UPDATE_PLACE,
      placeData: {
        id: id,
        categoryId,
        title,
        imageUrl,
        location,
        openingHours,
      },
    });
  };
};

export const toggleFavorite = (id) => {
  return async (dispatch) => {
    const date = new Date();
    const response = await fetch(
      "https://my-project-fdbf6.firebaseio.com/favorite/u1.json?",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong! catch toggleFavorite");
    }

    const resData = await response.json();

    dispatch({
      type: TOGGLE_FAVORITE,
      placeId: id,
      orderData: {
        id: resData.name,
      },
    });
  };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings };
};
