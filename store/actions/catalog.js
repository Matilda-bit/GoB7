//my actions
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

// export const toggleFavorite = (id) => {
//     return {type: TOGGLE_FAVORITE, placeId: id};
// };

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
