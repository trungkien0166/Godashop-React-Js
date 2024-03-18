import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_CART } from '../const/PopupConstant';
import { Link } from 'react-router-dom';

export default function Cart() {
    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    console.log('popup_type', popup_type);
    //fade là không hiển thị 
    const fade = popup_type === POPUP_CART ? '' : 'fade';
    const display = popup_type === POPUP_CART ? 'block' : 'none';
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        const action = { type: POPUP_CART };
        dispatch(action);
    }
    return (
        <>
            <div className={'modal' + fade} id="modal-cart-detail" role="dialog" style={{ display: display }}>
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
