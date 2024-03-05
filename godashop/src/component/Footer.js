import React from 'react';

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
                                                <li><a href="#">Kem Chống Nắng </a></li>
                                                <li><a href="#">Kem Dưỡng Da </a></li>
                                                <li><a href="#">Kem Trị Mụn </a></li>
                                                <li><a href="#">Kem Trị Thâm Nám </a></li>
                                                <li><a href="#">Sữa Rửa Mặt </a></li>
                                                <li><a href="#">Sữa Tắm </a></li>
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
                <div className="modal fade" id="modal-register" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-color">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 className="modal-title text-center">Đăng ký</h3>
                            </div>
                            <form action="#" method="POST" role="form">
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
                {/* END REGISTER DIALOG */}
                {/* LOGIN DIALOG */}
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
                <div className="modal fade" id="modal-forgot-password" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-color">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3 className="modal-title text-center">Quên mật khẩu</h3>
                            </div>
                            <form action="#" method="POST" role="form">
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
                </div>
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
                                                <div className="col-sm-6 col-md-3"><a className="product-name" href="#">Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream</a></div>
                                                <div className="col-sm-6 col-md-2"><span className="product-item-discount">190,000₫</span></div>
                                                <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,2)" min={1} defaultValue={1} /></div>
                                                <div className="col-sm-6 col-md-2"><span>190,000₫</span></div>
                                                <div className="col-sm-6 col-md-1"><a className="remove-product" href="javascript:void(0)" onclick="deleteProductInCart(2)"><span className="glyphicon glyphicon-trash" /></a></div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="clearfix text-left">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-1">
                                                    <div><img className="img-responsive" src="../images/suaRuaMatNgheBeaumore100g.jpg" alt="Sữa rửa mặt nghệ Beaumore Mới- 100g " /></div>
                                                </div>
                                                <div className="col-sm-6 col-md-3"><a className="product-name" href="#">Sữa rửa mặt nghệ Beaumore Mới- 100g</a></div>
                                                <div className="col-sm-6 col-md-2"><span className="product-item-discount">250,000₫</span></div>
                                                <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,4)" min={1} defaultValue={2} /></div>
                                                <div className="col-sm-6 col-md-2"><span>500,000₫</span></div>
                                                <div className="col-sm-6 col-md-1"><a className="remove-product" href="javascript:void(0)" onclick="deleteProductInCart(4)"><span className="glyphicon glyphicon-trash" /></a></div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="clearfix text-left">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-1">
                                                    <div><img className="img-responsive" src="../images/suaTamSandrasShowerGel.jpg" alt="Sữa tắm Sandras Shower Gel " /></div>
                                                </div>
                                                <div className="col-sm-6 col-md-3"><a className="product-name" href="#">Sữa tắm Sandras Shower Gel</a></div>
                                                <div className="col-sm-6 col-md-2"><span className="product-item-discount">180,000₫</span></div>
                                                <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,7)" min={1} defaultValue={3} /></div>
                                                <div className="col-sm-6 col-md-2"><span>540,000₫</span></div>
                                                <div className="col-sm-6 col-md-1"><a className="remove-product" href="javascript:void(0)" onclick="deleteProductInCart(7)"><span className="glyphicon glyphicon-trash" /></a></div>
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
