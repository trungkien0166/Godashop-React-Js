import React, { useEffect, useState } from 'react';
import CatSidebar from '../component/CatSidebar';
import PriceSidebar from '../component/PriceSidebar';
import ProductInner from '../component/ProductInner';
import { axiosNonAuthInstance, getProductId } from '../helper/util';
import Loading from '../component/Loading';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

    const { slug } = useParams();
    const productId = getProductId(slug);
    const priceRange = '';
    const handlePrice = (priceRange) => {
        // update later
    }
    const [product, setProduct] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const getProduct = async () => {
        setIsLoaded(false); // resets lại trước khi call api 
        try {
            // console.log(new Date());
            // console.log(page);
            const response = await axiosNonAuthInstance().get
                (`/products/${productId}`);
            setProduct(response.data);
            setIsLoaded(true);
            // toast.success('Success');
        }
        catch (error) {
            console.log(error)
            setIsLoaded(false);
        }
    }
    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
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
                                <li className="active"><span>Kem Dưỡng Da</span></li>
                            </ol>
                        </div>
                        <div className="col-xs-3 hidden-lg hidden-md">
                            <a className="hidden-lg pull-right btn-aside-mobile" href="!">Bộ lọc <i className="fa fa-angle-double-right" /></a>
                        </div>
                        <div className="clearfix" />
                        <aside className="col-md-3">
                            <div className="inner-aside">
                                <CatSidebar categoryId={product?.category_id} />
                                <PriceSidebar handlePrice={handlePrice} priceRange={priceRange} />
                            </div>
                        </aside>
                        <div className="col-md-9 product-detail">
                            {isLoaded ? <ProductInner product={product} />
                                : <Loading />}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
