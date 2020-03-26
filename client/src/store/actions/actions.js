export const getUsers = users => {
  return {
    type: "GET_USERS",
    users
  };
};

export const usersIsLoading = usersIsLoading => {
  return {
    type: "USERS_IS_LOADING",
    usersIsLoading
  };
};

export const fetchUsers = () => {
  return dispatch => {
    fetch("/api/users")
      .then(response => response.json())
      .then(result => {
        dispatch(getUsers(result));
        dispatch(usersIsLoading(false));
      })
      .catch(e => console.log(e));
  };
};
