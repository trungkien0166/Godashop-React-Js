import { LOGIN, LOGOUT } from "../const/AuthConstant";

const authInfo = localStorage.getItem('authInfo');
let initialState;
if (!authInfo) {
    initialState = { isLogin: false, access_token: null, loggedUser: null };
}
else {
    // chuyển ngược lại từ chuỗi thành object 
    initialState = JSON.parse(authInfo);
}
// state lưu 3 thông tin {islogin, access_token,loggerUser}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                const new_state = {
                    isLogin: true,
                    access_token: action.payload.access_token,
                    loggedUser: action.payload.loggedUser
                };
                // Lưu xuống localStorage của trình duyệt 
                //để khi tắt trình duyệt hay refresh trang web thì thông tin login vẫn còn 
                // khi refresh trang web lại thì redux bị die nên thông tin login bị mất . 
                //Cần lưu lại localStorage 
                localStorage.setItem('authInfo', JSON.stringify(new_state));
                return new_state;
            }
        case LOGOUT:
            {
                const new_state = {
                    isLogin: false,
                    access_token: null,
                    loggedUser: null
                };
                localStorage.setItem('authInfo', JSON.stringify(new_state));
                return new_state
            }

        default:
            return state;// luôn luôn là chữ state
    }
}
export default AuthReducer;