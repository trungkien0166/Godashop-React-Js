import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { axiosAuthInstance, axiosNonAuthInstance } from '../helper/util';
import { useNavigate } from 'react-router-dom';

import { EMTY_CART } from '../const/CartConstant';


export default function DeliveryInfo() {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        getProvinces();
        getDistricts(loggedUser.province_id);
        getWards(loggedUser.district_id);
    }, [])

    const getProvinces = async () => {
        try {
            // Lưu comment
            const response = await axiosNonAuthInstance().get(`/provinces`)
            setProvinces(response.data)
        }
        catch (error) {
            console.log(error);
            toast.error(error?.response?.data || error.message)
        }
    }
    const getDistricts = async (province_id) => {
        try {
            // Lưu comment
            const response = await axiosNonAuthInstance().get(`/districts/province/${province_id}`)
            setDistricts(response.data)
        }
        catch (error) {
            console.log(error);
            toast.error(error?.response?.data || error.message)
        }

    }
    const getWards = async (district_id) => {
        try {
            // Lưu comment
            const response = await axiosNonAuthInstance().get(`/wards/district/${district_id}`)
            setWards(response.data)
        }
        catch (error) {
            console.log(error);
            toast.error(error?.response?.data || error.message)
        }
    }
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.AuthReducer.loggedUser);
    const formik = useFormik({
        // khởi tạo giá trị ban đầu 
        initialValues: {
            //dựa vào name của thẻ input
            fullname: loggedUser.name,
            mobile: loggedUser.mobile,
            province: loggedUser.province_id,
            district: loggedUser.district_id,
            ward: loggedUser.ward_id,
            address: loggedUser.housenumber_street_id,
            payment_method: '0' //COD mặc định 
        },
        // check dữ liệu 
        validationSchema: Yup.object({
            fullname: Yup.string().required('Vui lòng nhập họ và tên')
                .max(255, 'Vui lòng không nhập quá 255 ký tự')
                .matches(/^[a-zA-ZAaàáãạăằắẵặâầấẫậbcdđeèéẽẹêềếễệghìíĩịklmnoòóõọôồốỗộơờớỡợpqrstuùúũụưừứữựvxyýỳỹỵAÀÁÃẠĂẰẮẴẶÂẦẤẪẬBCDĐEÈÉẼẸÊỀẾỄỆGHIÌÍĨỊKLMNOÒÓÕỌÔỒỐỖỘƠỜỚỠỢPQRSTUÙÚŨỤƯỪỨỮỰVXYÝỲỸỴ\s]+$/, 'Vui lòng nhập đúng định dạng họ và tên'),
            // mobile: Yup.string().required('Vui lòng nhập số điện thoại')
            //     .matches(/^0[0-9]{9,9}$/, 'Vui lòng nhập đúng định dạng số điện thoại. vd: 0932538468'),
            // mobile: Yup.string().required('Vui lòng nhập số điện thoại')
            //     .matches(/^0[0-9]{9,9}$/, 'Vui lòng nhập đúng định dạng số điện thoại. vd: 0932538468'),
            // mobile: Yup.string().required('Vui lòng nhập số điện thoại')
            //     .matches(/^0[0-9]{9,9}$/, 'Vui lòng nhập đúng định dạng số điện thoại. vd: 0932538468'),
            province: Yup.string()
                .required('Vui lòng chọn tỉnh/thành phố'),
            district: Yup.string()
                .required('Vui lòng chọn quận/huyện'),
            ward: Yup.string()
                .required('Vui lòng chọn phường/xã'),
            address: Yup.string().required('Vui lòng nhập địa chỉ(số nhà và tên đường)')
        }),
        // khi dữ liệu hợp lệ sẽ chạy dòng code onSubmit
        onSubmit: async values => {
            try {
                // endpoint
                const customCartItems = []
                for (const cartItem of cartItems) {
                    cartItem.quantity = cartItem.qty
                    customCartItems.push(cartItem)
                }
                const data = {
                    deliveryInfo: values,
                    cartItems: customCartItems,
                    loggedUser: loggedUser
                }
                console.log(cartItems)
                await axiosAuthInstance().post(`/orders`, JSON.stringify(data));
                // cập nhật giỏ hàng thành rỗng (empty)
                const action = { type: EMTY_CART }
                dispatch(action);
                navigate('/don-hang-cua-toi.html');
            }
            catch (error) {
                console.log(error);
                toast.error(error?.response?.data || error.message);
            }
        }
    });

    const handleChangeProvince = (e) => {
        formik.handleChange(e);
        getDistricts(e.target.value);
        setWards([]);
    }

    const handleChangeDistrict = (e) => {
        formik.handleChange(e);
        getWards(e.target.value);
    }

    return (
        <>
            <div className="ship-checkout col-md-6">
                <h4>Thông tin giao hàng</h4>
                <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <input type="text" className="form-control" name="fullname" placeholder="Họ và tên" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname} />
                            {
                                formik.touched.fullname && formik.errors.fullname ?
                                    <div className="text-danger">{formik.errors.fullname}</div> : null
                            }
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="tel" className="form-control" name="mobile" placeholder="Số điện thoại" onChange={formik.handleChangeProvince} onBlur={formik.handleBlur} value={formik.values.mobile} />
                            {
                                formik.touched.mobile && formik.errors.mobile ?
                                    <div className="text-danger">{formik.errors.mobile}</div> : null
                            }
                        </div>
                        <div className="form-group col-sm-4">
                            <select name="province" className="form-control province" required onChange={handleChangeProvince} onBlur={formik.handleBlur} value={formik.values.province} >
                                <option value>Tỉnh / thành phố</option>
                                {provinces.map((province, index) =>
                                    <option key={index} value={province.id}>{province.name}</option>
                                )}


                            </select>
                            {
                                formik.touched.province && formik.errors.province ?
                                    <div className="text-danger">{formik.errors.province}</div> : null
                            }
                        </div>
                        <div className="form-group col-sm-4">
                            <select name="district" className="form-control district" onChange={handleChangeDistrict} onBlur={formik.handleBlur} value={formik.values.district}>
                                <option value>Quận / huyện</option>
                                {districts.map((district, index) =>
                                    <option key={index} value={district.id}>{district.name}</option>
                                )}

                            </select>
                            {
                                formik.touched.district && formik.errors.district ?
                                    <div className="text-danger">{formik.errors.district}</div> : null
                            }
                        </div>
                        <div className="form-group col-sm-4">
                            <select name="ward" className="form-control ward" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ward}>
                                <option value>Phường / xã</option>
                                {wards.map((ward, index) =>
                                    <option key={index} value={ward.id}>{ward.name}</option>
                                )}

                            </select>
                            {
                                formik.touched.ward && formik.errors.ward ?
                                    <div className="text-danger">{formik.errors.ward}</div> : null
                            }
                        </div>
                        <div className="form-group col-sm-12">
                            <input type="text" className="form-control" placeholder="Địa chỉ" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                            {
                                formik.touched.address && formik.errors.address ?
                                    <div className="text-danger">{formik.errors.address}</div> : null
                            }
                        </div>

                        <div>
                            <h4>Phương thức thanh toán</h4>
                            <div className="form-group">
                                <label> <input type="radio" name="payment_method" value={0} onChange={formik.handleChange} checked={formik.values.payment_method === "0" ? true : false} /> Thanh toán khi giao hàng (COD) </label>
                                <div />
                            </div>
                            <div className="form-group">
                                <label> <input type="radio" name="payment_method" value={1} onChange={formik.handleChange} checked={formik.values.payment_method === "1" ? true : false} /> Chuyển khoản qua ngân hàng </label>
                                <div className="bank-info">STK: 0421003707901<br />Chủ TK: Nguyễn Hữu Lộc. Ngân hàng: Vietcombank TP.HCM <br />
                                    Ghi chú chuyển khoản là tên và chụp hình gửi lại cho shop dễ kiểm tra ạ
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-sm btn-primary pull-right">Hoàn tất đơn hàng</button>
                            </div>
                        </div>
                        <div className="form-group col-sm-12">
                        </div>
                    </div>
                </form >
            </div >
        </>
    );
}
