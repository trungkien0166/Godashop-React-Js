import React from 'react';
import { createLinkOrderDetail, createLinkProduct } from '../helper/util';
import { Link } from 'react-router-dom';

export default function OrderList({ orders }) {
    return (
        <>
            {/* Mỗi đơn hàng */}

            {
                orders.map((order, index) =>
                    <div key={index} className="row">
                        <div className="col-md-12">
                            <h5>Đơn hàng <Link to={createLinkOrderDetail(order)}>#{order.id}</Link></h5>
                            <span className="date">
                                Đặt hàng ngày {order.created_date}</span>
                            {order.order_items.map((order_item, index_item) =>
                                <>
                                    <hr />
                                    <div key={index_item} className="row">
                                        <div className="col-md-2">
                                            <img src={order_item.product.featured_image} alt='' className="img-responsive" />
                                        </div>
                                        <div className="col-md-3">
                                            <a className="product-name" href={createLinkProduct(order_item.product)}>{order_item.product.name}</a>
                                        </div>
                                        <div className="col-md-2">
                                            Số lượng:{order_item.qty}
                                        </div>
                                        <div className="col-md-2">
                                            {order_item.status_description}
                                        </div>
                                        <div className="col-md-3">
                                            Giao hàng ngày {order_item.delivered_date}
                                        </div>
                                    </div>
                                </>
                            )
                            }
                        </div>
                    </div>

                )
            }
        </>
    );
}
