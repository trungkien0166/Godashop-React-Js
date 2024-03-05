import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../page/Home';
import Product from '../page/Product';
import PaymentPolicy from '../page/PaymentPolicy';
import DeliveryPolicy from '../page/DeliveryPolicy';
import ReturnPolicy from '../page/ReturnPolicy';
import Contact from '../page/Contact';
import ProductDetail from '../page/ProductDetail';
//trang chủ
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* trang chủ */}
                    <Route path="" element={<Home />} />
                    <Route path="/san-pham.html" element={<Product />} />
                    <Route path="/danh-muc/:slug" element={<Product />} />
                    <Route path="/chinh-sach-thanh-toan.html" element={<PaymentPolicy />} />
                    <Route path="/chinh-sach-giao-hang.html" element={<DeliveryPolicy />} />
                    <Route path="/chinh-sach-doi-tra.html" element={<ReturnPolicy />} />
                    <Route path="/lien-he.html" element={<Contact />} />
                    <Route path="/san-pham/:slug" element={<ProductDetail />} />
                </Route>
            </Routes>
        </>
    );
}
