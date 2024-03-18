import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Cart from './Cart';
import ForgotPassword from './ForgotPassword';

export default function Footer() {
    return (
        <>
            <div>
                <footer className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-xs-4 list">
                                        <div className="footerLink">
                                            <h4>Danh mục</h4>
                                            <ul className="list-unstyled">
                                                <li><Link to="#">Kem Chống Nắng </Link></li>
                                                <li><Link to="#">Kem Dưỡng Da </Link></li>
                                                <li><Link to="#">Kem Trị Mụn </Link></li>
                                                <li><Link to="#">Kem Trị Thâm Nám </Link></li>
                                                <li><Link to="#">Sữa Rửa Mặt </Link></li>
                                                <li><Link to="#">Sữa Tắm </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-4 list">
                                        <div className="footerLink">
                                            <h4>Liên kết </h4>
                                            <ul className="list-unstyled">
                                                <li><a href="san-pham.html">Sản phẩm </a></li>
                                                <li><a href="chinh-sach-doi-tra.html">Chính sách đổi trả</a></li>
                                                <li><a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a></li>
                                                <li><a href="chinh-sach-giao-hang.html">Chính sách giao hàng </a></li>
                                                <li><a href="lien-he.html">Liên hệ </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-4 list">
                                        <div className="footerLink">
                                            <h4>Liên hệ với chúng tôi </h4>
                                            <ul className="list-unstyled">
                                                <li>Phone: 0932.538.468</li>
                                                <li><a href="mailto:nguyenhuulocla2006@gmail.com">Mail: nguyenhuulocla2006@gmail.com</a></li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li><a href="https://www.facebook.com/HocLapTrinhWebTaiNha.ThayLoc"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="https://twitter.com"><i className="fab fa-twitter" /></a></li>
                                                <li><a href="https://www.instagram.com"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest" /></a></li>
                                                <li><a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-12 list">
                                        <div className="newsletter clearfix">
                                            <h4>Bản tin</h4>
                                            <p>Nhập Email của bạn để chúng tôi cung cấp thông tin nhanh nhất cho bạn về những sản phẩm mới!!</p>
                                            <form action method="POST">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Nhập email của bạn.." name="email" />
                                                    <button type="submit" className="btn btn-primary send pull-right">Gửi</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END FOOTER */}
                {/* BACK TO TOP */}
                <div className="back-to-top">▲</div>
                {/* REGISTER DIALOG */}
                <RegisterForm />
                {/* END REGISTER DIALOG */}
                {/* LOGIN DIALOG */}
                <LoginForm />
                <div className="modal fade" id="modal-login" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-color">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 className="modal-title text-center">Đăng nhập</h3>
                                {/* Google login */}
                                <br />
                                <div className="text-center">
                                    <a className="btn btn-primary google-login" href="#"><i className="fab fa-google" /> Đăng nhập bằng Google</a>
                                    {/* Facebook login */}
                                    <a className="btn btn-primary facebook-login" href="#"><i className="fab fa-facebook-f" /> Đăng nhập bằng Facebook</a>
                                </div>
                            </div>
                            <form action="#" method="POST" role="form">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Mật khẩu" required />
                                    </div>
                                    <input type="hidden" name="reference" defaultValue />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Đăng Nhập</button><br />
                                    <div className="text-left">
                                        <a href="javascript:void(0)" className="btn-register">Bạn chưa là thành viên? Đăng kí ngay!</a>
                                        <a href="javascript:void(0)" className="btn-forgot-password">Quên Mật Khẩu?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* &lt; !--END LOGIN DIALOG-- &gt;
                &lt; !--FORTGOT PASSWORD DIALOG-- &gt; */}
                <ForgotPassword />
                {/* END FORTGOT PASSWORD DIALOG */}
                {/* CART DIALOG */}
                <Cart />
                {/* END CART DIALOG */}
                {/* Facebook Messenger Chat */}
                {/* Load Facebook SDK for JavaScript */}
                <div id="fb-root" />
                {/* Your customer chat code */}
                <div className="fb-customerchat" attribution="setup_tool" page_id={112296576811987} logged_in_greeting="Chào bạn, bạn muốn mua sản phẩm nào bên GodaShop.com" logged_out_greeting="Chào bạn, bạn muốn mua sản phẩm nào bên GodaShop.com">
                </div>
                {/* End Facebook Messenger Chat */}
            </div>

        </>
    );
}
