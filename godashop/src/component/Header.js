import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { POPUP_CART, POPUP_LOGIN, POPUP_REGISTER } from '../const/PopupConstant';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOGOUT } from '../const/AuthConstant';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlePopupRegister = () => {
        // đẩy  action lên store để reducer xử lý 
        const action = { type: POPUP_REGISTER };
        dispatch(action)
    }
    const handlePopupLogin = () => {
        // đẩy  action lên store để reducer xử lý 
        const action = { type: POPUP_LOGIN };
        dispatch(action)
    }
    const handlePopupCart = () => {
        // đẩy  action lên store để reducer xử lý 
        const action = { type: POPUP_CART };
        dispatch(action)
    }
    //Đăng ký với store về thay đổi trạng  đăng nhập / đăng xuất 
    const isLogin = useSelector(state => state.AuthReducer.isLogin);
    const loggedUser = useSelector(state => state.AuthReducer.loggedUser);
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const totalItem = cartItems.reduce((total, item) => total + Number(item.qty), 0)
    // console.log('Trạng thái login', isLogin);
    const handleLogout = (e) => {
        // ngăn chặn chạy href thẻ a
        e.preventDefault();
        // đẩy action lên store để  reducer xử lý
        const action = { type: LOGOUT };
        dispatch(action);
        // điều hướng về trang chủ (không tải lại toàn bộ trang )
        navigate('/');
    }

    return (
        <>
            <div>
                <header>
                    {/* use for ajax */}
                    <input type="hidden" id="reference" defaultValue />
                    {/* Top Navbar */}
                    <div className="top-navbar container-fluid">
                        <div className="menu-mb">
                            <Link to="#" className="btn-close" onclick="closeMenuMobile()">×</Link>
                            <NavLink className="" to="/">Trang chủ</NavLink>
                            <NavLink to="/san-pham.html">Sản phẩm</NavLink>
                            <NavLink to="chinh-sach-doi-tra.html">Chính sách đổi trả</NavLink>
                            <NavLink to="chinh-sach-thanh-toan.html">Chính sách thanh toán</NavLink>
                            <NavLink to="chinh-sach-giao-hang.html">Chính sách giao hàng</NavLink>
                            <NavLink to="lien-he.html">Liên hệ</NavLink>
                        </div>
                        <div className="row">
                            <div className="hidden-lg hidden-md col-sm-2 col-xs-1">
                                <span className="btn-menu-mb" onclick="openMenuMobile()"><i className="glyphicon glyphicon-menu-hamburger" /></span>
                            </div>
                            <div className="col-md-6 hidden-sm hidden-xs">
                                <ul className="list-inline">
                                    <li><Link to="https://www.facebook.com/HocLapTrinhWebTaiNha.ThayLoc"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link to="https://twitter.com"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link to="https://www.instagram.com"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link to="https://www.pinterest.com/"><i className="fab fa-pinterest" /></Link></li>
                                    <li><Link to="https://www.youtube.com/"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-10 col-xs-11">
                                <ul className="list-inline pull-right top-right">
                                    <li className="account-login">
                                        {
                                            isLogin ?
                                                <Link to="/don-hang-cua-toi.html" class="btn-logout">Đơn hàng của tôi</Link>
                                                :
                                                <Link to="#" onClick={() => handlePopupRegister()}
                                                    className="btn-register">Đăng Ký</Link>
                                        }
                                    </li>
                                    <li>
                                        {isLogin ?
                                            <>
                                                <Link to="#" class="btn-account dropdown-toggle" data-toggle="dropdown"
                                                    id="dropdownMenu">{loggedUser.name}</Link>
                                                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu">
                                                    <li><Link to="/thong-tin-tai-khoan.html">Thông tin tài khoản</Link></li>
                                                    <li><Link to="/dia-chi-giao-hang-mac-dinh.html">Địa chỉ giao hàng</Link></li>
                                                    <li><Link to="/don-hang-cua-toi.html">Đơn hàng của tôi</Link></li>
                                                    <li role="separator" class="divider"></li>
                                                    <li><Link to="#" onClick={(e) => handleLogout(e)}>Thoát</Link></li>
                                                </ul>
                                            </>
                                            :
                                            <Link to="#" onClick={() => handlePopupLogin()}
                                                className="btn-login">Đăng Nhập</Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End top navbar */}
                    {/* Header */}
                    <div className="container">
                        <div className="row">
                            {/* LOGO */}
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 logo">
                                <Link to="#"><img src="../images/goda450x170_1.jpg" className="img-responsive" alt="" /></Link>
                            </div>
                            <div className="col-lg-4 col-md-4 hidden-sm hidden-xs call-action">
                                <Link to="#"><img src="../images/godakeben450x170.jpg" className="img-responsive" alt="" /></Link>
                            </div>
                            {/* HOTLINE AND SERCH */}
                            <div className="col-lg-4 col-md-4 hotline-search">
                                <div>
                                    <p className="hotline-phone"><span><strong>Hotline: </strong><Link to="tel:0932.538.468">0932.538.468</Link></span></p>
                                    <p className="hotline-email"><span><strong>Email: </strong><Link to="mailto:nguyenhuulocla2006@gmail.com">nguyenhuulocla2006@gmail.com</Link></span></p>
                                </div>
                                <form className="header-form" action>
                                    <div className="input-group">
                                        <input type="search" className="form-control search" placeholder="Nhập từ khóa tìm kiếm" name="search" autoComplete="off" defaultValue />
                                        <div className="input-group-btn">
                                            <button className="btn bt-search bg-color" type="submit"><i className="fa fa-search" style={{ color: '#fff' }} />
                                            </button>
                                        </div>
                                        <input type="hidden" name="c" defaultValue="product" />
                                        <input type="hidden" name="a" defaultValue="list" />
                                    </div>
                                    <div className="search-result">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End header */}
                </header>
                {/* NAVBAR DESKTOP*/}
                <nav className="navbar navbar-default desktop-menu">
                    <div className="container">
                        <ul className="nav navbar-nav navbar-left hidden-sm hidden-xs">
                            <li className="">
                                <NavLink to="/">Trang chủ</NavLink>
                            </li>
                            <li><NavLink to="/san-pham.html">Sản phẩm </NavLink></li>
                            <li><NavLink to="/chinh-sach-doi-tra.html">Chính sách đổi trả</NavLink></li>
                            <li><NavLink to="/chinh-sach-thanh-toan.html">Chính sách thanh toán</NavLink></li>
                            <li><NavLink to="/chinh-sach-giao-hang.html">Chính sách giao hàng</NavLink></li>
                            <li><NavLink to="/lien-he.html">Liên hệ</NavLink></li>
                        </ul>
                        <span className="hidden-lg hidden-md experience">Trải nghiệm cùng sản phẩm của Goda</span>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="cart"><Link onClick={() => handlePopupCart()} to="#" className="btn-cart-detail" title="Giỏ Hàng"><i className="fa fa-shopping-cart" />
                                <span className="number-total-product">{totalItem}</span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </>
    );
}
