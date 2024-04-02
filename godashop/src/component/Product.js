import React from 'react';
import { axiosNonAuthInstance, createLinkProduct, formatMoney } from '../helper/util';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../const/CartConstant';
import { toast } from 'react-toastify';
export default function Product({ product }) {
    const dispatch = useDispatch();
    // const handleAddProductToCart = async (id) => {
    //     try {
    //         // console.log(new Date());
    //         // console.log(page);
    //         const response = await axiosNonAuthInstance().get(`/products/${id}`);
    //         const product = response.data;
    //         const item = {
    //             id: product.id,
    //             name: product.name,
    //             feauted_image: product.feauted_image,
    //             sale_price: product.sale_price,
    //             qty: 1
    //         }
    //         const action ={type:ADD}
    //     }
    //     catch (error) {
    //         console.log(error);
    //         setIsLoaded(true);
    //     }
    // }

    const handleAddProductToCart = async (id) => {
        try {
            console.log(new Date());
            const response = await axiosNonAuthInstance().get(`/products/${id}`);
            const product = response.data;
            const item = {
                id: product.id,
                name: product.name,
                featured_image: product.featured_image,
                sale_price: product.sale_price,
                qty: 1
            };

            // tạo action để dispatch lên store
            const action = { type: ADD_TO_CART, payload: item };
            dispatch(action);
        }
        catch (error) {
            console.log(error);
            toast.error(error?.response?.data || error.message)
        }
    }
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
                        <Link className="btn btn-outline-inverse buy" to="#" onClick={() => handleAddProductToCart(product.id)} title="Thêm vào giỏ">
                            Thêm vào giỏ <i className="fa fa-shopping-cart" />
                        </Link>
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
