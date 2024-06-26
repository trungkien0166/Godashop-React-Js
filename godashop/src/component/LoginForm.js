/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { POPUP_CLOSE, POPUP_FORGOT_PASS, POPUP_LOGIN } from '../const/PopupConstant';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { axiosNonAuthInstance } from '../helper/util';
import { toast } from 'react-toastify';
import { LOGIN } from '../const/AuthConstant';
export default function LoginForm() {
    const navigate = useNavigate();
    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    console.log('popup_type', popup_type);
    //fade là không hiển thị 
    const fade = popup_type === POPUP_LOGIN ? '' : 'fade';
    const display = popup_type === POPUP_LOGIN ? 'block' : 'none';
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        const action = { type: POPUP_CLOSE };
        dispatch(action);
    }
    const handlePorgotPassword = () => {
        // đẩy  action lên store để reducer xử lý 
        const action = { type: POPUP_FORGOT_PASS };
        dispatch(action)

    }

    const formik = useFormik({
        // khởi tạo giá trị yarn
        initialValues: {
            //dựa vào name của thẻ input
            email: '',
            password: '',
        },
        // check dữ liệu 
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Vui lòng nhập mật khẩu'),
            email: Yup.string()
                .required('Vui lòng nhập email'),
        }),
        onSubmit: async values => {
            handleClosePopup();
            //call api để đăng nhập 
            try {
                // console.log(new Date());
                // console.log(page);
                const response = await axiosNonAuthInstance().post
                    (`/login`, JSON.stringify(values));
                const data = response.data;
                console.log(data);
                // toast.success('Đăng nhập thành công');
                //dispatch action bao gồm cả access token và thông tin user lên store
                const action = {
                    type: LOGIN,
                    payload: {
                        access_token: data.access_token,
                        loggedUser: data.user
                    }
                }
                dispatch(action);
                // Sau khi login sẽ điều hướng vào trang thông tin tài khoản   
                navigate('/thong-tin-tai-khoan.html');
            }
            catch (error) {
                console.log(error);
                toast.error(error?.response?.data || error.message)
            }
        }
    });
    return (
        <>
            {/* END REGISTER DIALOG */}
            {/* LOGIN DIALOG */}
            {/* style={{ display: 'block' }} */}
            <div className={'modal' + fade} id="modal-login" role="dialog" style={{ display: display }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button onClick={() => handleClosePopup()
                            } type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h3 className="modal-title text-center">Đăng nhập</h3>
                            {/* Google login */}
                            <br />
                            <div className="text-center">
                                <Link className="btn btn-primary google-login" to="#"><i className="fab fa-google" /> Đăng nhập bằng Google</Link>
                                {/* Facebook login */}
                                <Link className="btn btn-primary facebook-login" to="#"><i className="fab fa-facebook-f" /> Đăng nhập bằng Facebook</Link>
                            </div>
                        </div>
                        <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={formik.handleChange}
                                        value={formik.values.email} onBlur={formik.handleBlur} />
                                    {
                                        formik.touched.email && formik.errors.email ?
                                            <div className="text-danger"> {formik.errors.email} </div> : null
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Mật khẩu" onChange={formik.handleChange}
                                        value={formik.values.password} onBlur={formik.handleBlur} />
                                    {
                                        formik.touched.password && formik.errors.password ?
                                            <div className="text-danger"> {formik.errors.password} </div> : null
                                    }
                                </div>
                                <input type="hidden" name="reference" defaultValue />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Đăng Nhập</button><br />
                                <div className="text-left">
                                    <Link to="#" className="btn-register">Bạn chưa là thành viên? Đăng kí ngay!</Link>
                                    <Link onClick={() => handlePorgotPassword()
                                    } to="#" className="btn-forgot-password">Quên Mật Khẩu?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            {/* &lt; !--END LOGIN DIALOG-- &gt;
                &lt; !--FORTGOT PASSWORD DIALOG-- &gt; */}
            <div className="modal fade" id="modal-forgot-password" role="dialog" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h3 className="modal-title text-center">Quên mật khẩu</h3>
                        </div>
                        <form action="#" method="POST">
                            <div className="modal-body">
                                <div className="form-group">
                                    <input name="email" type="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="hidden" name="reference" defaultValue />
                                <button type="submit" className="btn btn-primary">GỬI</button><br />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            {/* END FORTGOT PASSWORD DIALOG */}
            {/* CART DIALOG */}
            <div className="modal fade" id="modal-cart-detail" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                            <h3 className="modal-title text-center">Giỏ hàng</h3>
                        </div>
                        <div className="modal-body">
                            <div className="page-content">
                                <div className="clearfix hidden-sm hidden-xs">
                                    <div className="col-xs-1">
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="header">
                                            Sản phẩm
                                        </div>
                                    </div>
                                    <div className="col-xs-2">
                                        <div className="header">
                                            Đơn giá
                                        </div>
                                    </div>
                                    <div className="label_item col-xs-3">
                                        <div className="header">
                                            Số lượng
                                        </div>
                                    </div>
                                    <div className="col-xs-2">
                                        <div className="header">
                                            Thành tiền
                                        </div>
                                    </div>
                                    <div className="lcol-xs-1">
                                    </div>
                                </div>
                                <div className="cart-product">
                                    <hr />
                                    <div className="clearfix text-left">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-1">
                                                <div><img className="img-responsive" src="../images/beaumoreSecretWhiteningCream10g.jpg" alt="Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream " /></div>
                                            </div>
                                            <div className="col-sm-6 col-md-3"><Link className="product-name" to="#">Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream</Link></div>
                                            <div className="col-sm-6 col-md-2"><span className="product-item-discount">190,000₫</span></div>
                                            <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,2)" min={1} defaultValue={1} /></div>
                                            <div className="col-sm-6 col-md-2"><span>190,000₫</span></div>
                                            <div className="col-sm-6 col-md-1"><Link className="remove-product" to="#" onclick="deleteProductInCart(2)"><span className="glyphicon glyphicon-trash" /></Link></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="clearfix text-left">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-1">
                                                <div><img className="img-responsive" src="../images/suaRuaMatNgheBeaumore100g.jpg" alt="Sữa rửa mặt nghệ Beaumore Mới- 100g " /></div>
                                            </div>
                                            <div className="col-sm-6 col-md-3"><Link className="product-name" to="#">Sữa rửa mặt nghệ Beaumore Mới- 100g</Link></div>
                                            <div className="col-sm-6 col-md-2"><span className="product-item-discount">250,000₫</span></div>
                                            <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,4)" min={1} defaultValue={2} /></div>
                                            <div className="col-sm-6 col-md-2"><span>500,000₫</span></div>
                                            <div className="col-sm-6 col-md-1"><Link className="remove-product" to="#" onclick="deleteProductInCart(4)"><span className="glyphicon glyphicon-trash" /></Link></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="clearfix text-left">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-1">
                                                <div><img className="img-responsive" src="../images/suaTamSandrasShowerGel.jpg" alt="Sữa tắm Sandras Shower Gel " /></div>
                                            </div>
                                            <div className="col-sm-6 col-md-3"><Link className="product-name" to="#">Sữa tắm Sandras Shower Gel</Link></div>
                                            <div className="col-sm-6 col-md-2"><span className="product-item-discount">180,000₫</span></div>
                                            <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,7)" min={1} defaultValue={3} /></div>
                                            <div className="col-sm-6 col-md-2"><span>540,000₫</span></div>
                                            <div className="col-sm-6 col-md-1"><Link className="remove-product" to="#" onclick="deleteProductInCart(7)"><span className="glyphicon glyphicon-trash" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="clearfix">
                                <div className="col-xs-12 text-right">
                                    <p>
                                        <span>Tổng tiền</span>
                                        <span className="price-total">1,230,000₫</span>
                                    </p>
                                    <input type="button" name="back-shopping" className="btn btn-default" defaultValue="Tiếp tục mua sắm" />
                                    <input type="button" name="checkout" className="btn btn-primary" defaultValue="Đặt hàng" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
