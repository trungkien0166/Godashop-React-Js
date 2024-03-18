import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_CLOSE, POPUP_REGISTER } from '../const/PopupConstant';

export default function RegisterForm() {
    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    console.log('popup_type', popup_type);
    //fade là không hiển thị 
    const fade = popup_type === POPUP_REGISTER ? '' : 'fade';
    const display = popup_type === POPUP_REGISTER ? 'block' : 'none';
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        const action = { type: POPUP_CLOSE };
        dispatch(action);
    }
    return (
        <>
            <div className={'modal' + fade} id="modal-register" role="dialog" style={{ display: display }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button onClick={() => handleClosePopup()} type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h3 className="modal-title text-center">Đăng ký</h3>
                        </div>
                        <form action="#" method="POST" >
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="fullname" placeholder="Họ và tên" required oninvalid="this.setCustomValidity('Vui lòng nhập tên của bạn')" oninput="this.setCustomValidity('')" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" name="mobile" placeholder="Số điện thoại" required pattern="[0][0-9]{9,}" oninvalid="this.setCustomValidity('Vui lòng nhập số điện thoại bắt đầu bằng số 0 và ít nhất 9 con số theo sau')" oninput="this.setCustomValidity('')" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required oninvalid="this.setCustomValidity('Vui lòng nhập email')" oninput="this.setCustomValidity('')" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Mật khẩu" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" oninvalid="this.setCustomValidity('Vui lòng nhập ít nhất 8 ký tự: số, chữ hoa, chữ thường')" oninput="this.setCustomValidity('')" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="re-password" placeholder="Nhập lại mật khẩu" required autoComplete="off" autoSave="off" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" oninvalid="this.setCustomValidity('Vui lòng nhập ít nhất 8 ký tự: số, chữ hoa, chữ thường')" oninput="this.setCustomValidity('')" />
                                </div>
                                <div className="form-group g-recaptcha" data-sitekey="6Lcj07oUAAAAALAHcj_WdDa7Vykqzui3mSA5SIoe" />
                                <input type="hidden" name="reference" defaultValue />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Hủy</button>
                                <button type="submit" className="btn btn-primary">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
