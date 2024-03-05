import React from 'react';

export default function Contact() {
    return (
        <>
            <main id="maincontent" className="page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ol className="breadcrumb">
                                <li><a href="/" target="_self">Trang chủ</a></li>
                                <li><span>/</span></li>
                                <li className="active"><span>Liên hệ</span></li>
                            </ol>
                        </div>
                    </div>
                    <div className="row contact">
                        <div className="col-md-6">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4981304733305!2d106.62440891371494!3d10.773108292323755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dcdd60efd3f%3A0x8e16362a8a43158e!2zVGjhuqd5IEzhu5ljIGThuqF5IGzhuq1wIHRyw6xuaCB3ZWI!5e0!3m2!1svi!2s!4v1570486606187!5m2!1svi!2s" width="100%" height="400px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div>
                        <div className="col-md-6">
                            <h4>Thông tin liên hệ</h4>
                            <form className="form-contact" action="#" method="POST">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="fullname" placeholder="Họ và tên" required onInvalid="this.setCustomValidity('Vui lòng nhập tên của bạn')" onInput="this.setCustomValidity('')" />
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-6">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required onInvalid="this.setCustomValidity('Vui lòng nhập email')" onInput="this.setCustomValidity('')" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <input type="tel" className="form-control" name="mobile" placeholder="Số điện thoại" required pattern="[0][0-9]{9,}" onInvalid="this.setCustomValidity('Vui lòng nhập số điện thoại bắt đầu bằng số 0 và ít nhất 9 con số theo sau')" onInput="this.setCustomValidity('')" />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <textarea className="form-control" placeholder="Nội dung" name="content" rows={10} required defaultValue={""} />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <button type="submit" className="btn btn-sm btn-primary pull-right">Gửi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
