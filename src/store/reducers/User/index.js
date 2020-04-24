const INITIAL_STATE = {
  id: "",
  name: "",
  department: null,
  avatar_url: "",
  accessToken: null,
  refreshToken: null,
  expiressAt: null,
  createdAt: null,
  company: null,
  stayLogged: false,
  role: "INTERN",
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };

    case "SET_USERCOMPANY":
      return { ...state, company: action.payload };

    case "SET_USERTOKEN":
      return { ...state, token: action.payload };

    case "CLEAR_USER":
      return INITIAL_STATE;

    default:
      return state;
  }
}
