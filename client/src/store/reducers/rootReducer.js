const initState = {
  users: [],
  usersIsLoading: true
};

export const rootReducer = (state = initState, action) => {
  if (action.type === "GET_USERS") {
    state = {
      ...state,
      users: action.users
    };
  }

  if (action.type === "USERS_IS_LOADING") {
    state = {
      ...state,
      usersIsLoading: action.usersIsLoading
    };
  }
  return state;
};
