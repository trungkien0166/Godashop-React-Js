import React from 'react';
import { createLinkProduct, formatMoney } from '../helper/util';
import { Link } from 'react-router-dom';
export default function Product({ product }) {
    return (
        <>
            <div className="product-container">
                <div className="image">
                    <img className="img-responsive" src={product.featured_image} alt={product.name} />
                </div>
                <div className="product-meta">
                    <h5 className="name">
                        <Link className="product-name" to={createLinkProduct(product)} title={product.name} >{product.name}</Link>
                    </h5>
                    <div className="product-item-price">
                        {
                            product.price !== product.sale_price ?
                                <span className="product-item-regular">{formatMoney(product.price)}đ</span>
                                : null
                        }
                        <span className="product-item-discount">{formatMoney(product.sale_price)}đ</span>
                    </div>
                </div >
                <div className="button-product-action clearfix">
                    <div className="cart icon">
                        <a className="btn btn-outline-inverse buy" href="!" title="Thêm vào giỏ">
                            Thêm vào giỏ <i className="fa fa-shopping-cart" />
                        </a>
                    </div>
                    <div className="quickview icon">
                        <Link className="btn btn-outline-inverse" to={createLinkProduct(product)} title="Xem nhanh">
                            Xem chi tiết <i className="fa fa-eye" />
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}
