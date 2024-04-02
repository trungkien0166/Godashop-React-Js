import { combineReducers } from "redux";
import PopupReducer from "./PopupReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
const RootReducer = combineReducers(
    // object
    {
        PopupReducer: PopupReducer,
        AuthReducer: AuthReducer,
        CartReducer: CartReducer
    }
)
export default RootReducer;