const initState = {
  user: {},
  userIsLoading: true
};

export const rootReducer = (state = initState, action) => {
  if (action.type === "GET_USER") {
    state = {
      ...state,
      user: action.user.user
    };
  }

  if (action.type === "USER_IS_LOADING") {
    state = {
      ...state,
      userIsLoading: action.userIsLoading
    };
  }
  return state;
};
