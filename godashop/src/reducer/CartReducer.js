import { ADD_TO_CART, EMTY_CART, REMOVE_FROM_CART, UPDATE_QTY, } from "../const/CartConstant";
import { pre_add_to_cart, pre_remove_to_cart, pre_update_cart } from "../helper/util";

const cart = localStorage.getItem('cart');
let initialState;
if (!cart) {
    initialState = {
        cartItems: []
    };
}
else {
    // chuyển  từ chuỗi json sang object 
    initialState = JSON.parse(cart);
}
// state lưu 3 thông tin {islogin, access_token,loggerUser}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
                const newCart = {
                    cartItems: pre_add_to_cart(state.cartItems, action.payload)
                }

                // Lưu xuống localstorage của trình duyệt,
                // để lần sau mở trình duyệt lên nó vẫn còn giỏ hàng
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
            }
        case REMOVE_FROM_CART:
            {
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
                const newCart = {
                    cartItems: pre_remove_to_cart(state.cartItems, action.payload.id)
                }

                // Lưu xuống localstorage của trình duyệt,
                // để lần sau mở trình duyệt lên nó vẫn còn giỏ hàng
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
            }
        case UPDATE_QTY:
            {
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
                const newCart = {
                    cartItems: pre_update_cart(state.cartItems, action.payload)
                }

                // Lưu xuống localstorage của trình duyệt,
                // để lần sau mở trình duyệt lên nó vẫn còn giỏ hàng
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
            }
        case EMTY_CART:
            {
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
                const newCart = {
                    cartItems: []
                }
                // Lưu xuống localstorage của trình duyệt,
                // để lần sau mở trình duyệt lên nó vẫn còn giỏ hàng
                localStorage.removeItem('cart');
                return newCart;
                // chưa tối ưu ,cần xử lý, làm tạm đỡ 
            }
        default:
            return state;// luôn luôn là chữ state
    }
}
export default CartReducer;