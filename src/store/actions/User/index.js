export const setUserCompany = (company) => ({
  type: "SET_USERCOMPANY",
  payload: company,
});

export const setUserToken = (token) => ({
  type: "SET_USERTOKEN",
  payload: token,
});

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const clearStorageUser = () => ({
  type: "CLEAR_USER",
  payload: {},
});
