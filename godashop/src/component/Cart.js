import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_CART, POPUP_CLOSE } from '../const/PopupConstant';
import { Link } from 'react-router-dom';
import { createLinkProduct, formatMoney } from '../helper/util';
import { REMOVE_FROM_CART } from '../const/CartConstant';

export default function Cart() {
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    console.log('popup_type', popup_type);
    //fade là không hiển thị 
    const fade = popup_type === POPUP_CART ? '' : 'fade';
    const display = popup_type === POPUP_CART ? 'block' : 'none';
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        const action = { type: POPUP_CLOSE };
        dispatch(action);
    }
    const handleRemoveProductOutCart = (id) => {
        const action = { type: REMOVE_FROM_CART, payload: { id: id } };
        dispatch(action);
    }

    return (
        <>
            <div className={'modal' + fade} id="modal-cart-detail" role="dialog" style={{ display: display }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button onClick={() => handleClosePopup()} type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
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
                                    {
                                        cartItems.map((item, index) =>
                                            <>
                                                <hr />
                                                <div key={index} className="clearfix text-left">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-1">
                                                            <div><img className="img-responsive" src={item.featured_image} alt="/" /></div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-3"><Link className="product-name" to={createLinkProduct(item)}>{item.name}</Link></div>
                                                        <div className="col-sm-6 col-md-2"><span className="product-item-discount">{formatMoney(item.sale_price)}</span></div>
                                                        <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,2)" min={1} value={item.qty} /></div>
                                                        <div className="col-sm-6 col-md-2"><span>{formatMoney(item.sale_price * item.qty)}</span></div>
                                                        <div className="col-sm-6 col-md-1"><Link onClick={() => handleRemoveProductOutCart(item.id)} className="remove-product" to="#" ><span className="glyphicon glyphicon-trash" /></Link></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
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
