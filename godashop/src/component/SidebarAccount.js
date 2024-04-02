import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarAccount() {
    return (
        <>
            <aside className="col-md-3">
                <div className="inner-aside">
                    <div className="category">
                        <ul>
                            <li>
                                <NavLink to="/thong-tin-tai-khoan.html" title="Thông tin tài khoản" target="_self">Thông tin tài khoản
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dia-chi-giao-hang-mac-dinh.html" title="Địa chỉ giao hàng mặc định" target="_self">Địa chỉ giao hàng mặc định
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/don-hang-cua-toi.html" target="_self">Đơn hàng của tôi
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}
