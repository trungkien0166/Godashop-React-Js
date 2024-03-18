import { POPUP_CART, POPUP_CLOSE, POPUP_FORGOT_PASS, POPUP_LOGIN, POPUP_REGISTER } from "../const/PopupConstant";
const initialState = {
    popup_type: ''
}

const PopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPUP_LOGIN:
            return { popup_type: POPUP_LOGIN };
        case POPUP_REGISTER:
            return { popup_type: POPUP_REGISTER };
        case POPUP_FORGOT_PASS:
            return { popup_type: POPUP_FORGOT_PASS };
        case POPUP_CART:
            return { popup_type: POPUP_CART };
        case POPUP_CLOSE:
            return { popup_type: POPUP_CLOSE };

        default:
            break;
    }
    return state;

}
export default PopupReducer;