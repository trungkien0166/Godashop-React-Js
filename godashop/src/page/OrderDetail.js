import React, { useEffect, useState } from 'react';
import SidebarAccount from '../component/SidebarAccount';
import { axiosAuthInstance, createLinkProduct, formatMoney, getOrderId } from '../helper/util';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';
import { useParams } from 'react-router-dom';

export default function OrderDetail() {
    const [order, setOrder] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { slug } = useParams();
    const orderId = getOrderId(slug);


    const getOrders = async () => {
        setIsLoaded(false); // resets lại trước khi call api 
        try {
            // console.log(new Date());
            // console.log(page);
            const response = await axiosAuthInstance().get(`/orders/${orderId}`);
            setOrder(response.data);
            setIsLoaded(true);
            toast.success('Success');
        }
        catch (error) {
            console.log(error);
            setIsLoaded(true);
        }
    }
    useEffect(() => {
        getOrders();
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <main id="maincontent" className="page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-9">
                            <ol className="breadcrumb">
                                <li><a href="/" target="_self">Trang chủ</a></li>
                                <li><span>/</span></li>
                                <li className="active"><span>Tài khoản</span></li>
                            </ol>
                        </div>
                        <div className="clearfix" />
                        <SidebarAccount />
                        <div className="col-md-9 order-info">
                            {
                                isLoaded ?
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h4 className="home-title">Đơn hàng {order.id}</h4>
                                        </div>
                                        <div className="clearfix" />
                                        <aside className="col-md-7 cart-checkout">
                                            {
                                                order.order_items.map((order_item) =>
                                                    <>
                                                        <div className="row">
                                                            <div className="col-xs-2">
                                                                <img className="img-responsive" src={order_item.product.featured_image} alt={order_item.product.name} />
                                                            </div>
                                                            <div className="col-xs-7">
                                                                <a className="product-name" href={createLinkProduct(order_item.product)}>{order_item.product.name}</a>
                                                                <br />
                                                                <span>{order_item.qty}</span> x


                                                                <span>{formatMoney(order_item.unit_price)}đ</span>
                                                            </div>
                                                            <div className="col-xs-3 text-right">
                                                                <span>
                                                                    {formatMoney(order_item.total_price)}
                                                                    đ</span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            }
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    Tạm tính
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    {
                                                        formatMoney(order.order_items.reduce((sub_total, order_item) =>
                                                            Number(sub_total) + Number(order_item.total_price), 0))
                                                    }₫
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    phí vận chuyển    </div>
                                                <div className="col-xs-6 text-right">
                                                    {formatMoney(order.shipping_fee)}đ
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    Tổng cộng
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    {
                                                        formatMoney(order.order_items.reduce((sub_total, order_item) =>
                                                            Number(sub_total) + Number(order_item.total_price), 0) + Number(order.shipping_fee))
                                                    }₫
                                                </div>

                                            </div>
                                        </aside>
                                        <div className="ship-checkout col-md-5">
                                            <h4>Thông tin giao hàng</h4>
                                            <div>
                                                Họ và tên: {order.shipping_fullname}
                                            </div>
                                            <div>
                                                Số điện thoại: {order.shipping_mobile}
                                            </div>
                                            <div>
                                                {order.province_name}</div>
                                        </div>
                                        <div>
                                            {order.district_name} </div>
                                        <div>
                                            {order.ward_name}</div>
                                        <div>
                                            {order.shipping_housenumber_street}                                            </div>
                                        <div>
                                            Phương thức thanh toán:
                                            {order.payment_method === 0 ? 'COD' : 'Bank'

                                            }
                                        </div>
                                    </div>
                                    : <Loading />
                            }
                        </div>
                    </div>
                </div>
            </main >

        </>
    );
}
