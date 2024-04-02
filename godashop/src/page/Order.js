import React, { useEffect, useState } from 'react';
import SidebarAccount from '../component/SidebarAccount';
import OrderList from '../component/OrderList';
import { axiosAuthInstance } from '../helper/util';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';


export default function Order() {
    const [orders, setOrders] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const getOrders = async () => {
        setIsLoaded(false); // resets lại trước khi call api 
        try {
            // console.log(new Date());
            // console.log(page);
            const response = await axiosAuthInstance().get(`/orders`);
            setOrders(response.data);
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
                        <div className="col-md-9 order">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4 className="home-title">Đơn hàng của tôi</h4>
                                </div>
                                <div className="clearfix" />
                                <div className="col-md-12">
                                    {
                                        isLoaded ? < OrderList orders={orders} /> : <Loading />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
