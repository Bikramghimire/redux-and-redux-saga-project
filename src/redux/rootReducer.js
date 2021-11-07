import { combineReducers } from "redux";
import { apiReducer } from "./apiCalling/apiReducer";
import shopReducer from "./shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  api: apiReducer,
});
export default rootReducer;
