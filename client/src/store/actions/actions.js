export const getUser = user => {
  return {
    type: "GET_USER",
    user
  };
};

export const userIsLoading = userIsLoading => {
  return {
    type: "USER_IS_LOADING",
    userIsLoading
  };
};
