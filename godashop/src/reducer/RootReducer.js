import { combineReducers } from "redux";
import PopupReducer from "./PopupReducer";
import AuthReducer from "./AuthReducer";
const RootReducer = combineReducers(
    // object
    {
        PopupReducer: PopupReducer,
        AuthReducer: AuthReducer
    }
)
export default RootReducer;