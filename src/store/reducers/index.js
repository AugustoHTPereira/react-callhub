import { combineReducers } from "redux";

import user from "./User";
import call from "./Call";

export default combineReducers({
  user,
  call,
});
