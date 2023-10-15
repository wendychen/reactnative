export const fetchRecipes = (action) => {
  return (dispatch, getState) => {
    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipeName,
        instructions,
        ingredients
      })
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((recipe) => {
          dispatch({
            type: 'UPDATE_RECIPE',
            recipe
          });
        });
      } else {
        res.json().then((err) => {
          dispatch({
            type: 'ERROR_RECIPE',
            message: err.reason,
            status: err.status
          });
        });
      }
    })
    .catch((err) => {
      // Runs if there is a general JS error.
      dispatch(error('There was a problem with the reqeust.'));
    });
  };
};
