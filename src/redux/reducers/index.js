import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./ptoductReducer";
import proDetailReducer from "./proDetailReducer";


export default combineReducers({
    auth:authenticateReducer,
    product:productReducer,
    proDetail:proDetailReducer
});