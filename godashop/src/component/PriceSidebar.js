import React from 'react';

export default function PriceSidebar({ handlePrice, priceRange }) {
    return (
        <>
            <div className="price-range">
                <h5>Khoảng giá</h5>
                <ul>
                    <li>
                        <label htmlFor="filter-less-100">
                            <input type="radio" id="filter-less-100" name="filter-price" defaultValue="0-100000"
                                onClick={() => handlePrice("0-100000")}
                                defaultChecked={priceRange === '0-100000' ? 'true' : ''} />
                            <i className="fa" />
                            Giá dưới 100.000đ
                        </label>
                    </li>
                    <li>
                        <label htmlFor="filter-100-200">
                            <input type="radio" id="filter-100-200" name="filter-price" defaultValue="100000-200000"
                                onClick={() => handlePrice("100000-200000")}
                                defaultChecked={priceRange === '100000-200000' ? 'true' : ''} />
                            <i className="fa" />
                            100.000đ - 200.000đ
                        </label>
                    </li>
                    <li>
                        <label htmlFor="filter-200-300">
                            <input type="radio" id="filter-200-300" name="filter-price" defaultValue="200000-300000"
                                onClick={() => handlePrice("200000-300000")}
                                defaultChecked={priceRange === '200000-300000' ? 'true' : ''} />
                            <i className="fa" />
                            200.000đ - 300.000đ
                        </label>
                    </li>
                    <li>
                        <label htmlFor="filter-300-500">
                            <input type="radio" id="filter-300-500" name="filter-price" defaultValue="300000-500000"
                                onClick={() => handlePrice("300000-500000")}
                                defaultChecked={priceRange === '300000-500000' ? 'true' : ''} />
                            <i className="fa" />
                            300.000đ - 500.000đ
                        </label>
                    </li>
                    <li>
                        <label htmlFor="filter-500-1000">
                            <input type="radio" id="filter-500-1000" name="filter-price" defaultValue="500000-1000000"
                                onClick={() => handlePrice("500000-1000000")}
                                defaultChecked={priceRange === '500000-1000000' ? 'true' : ''} />
                            <i className="fa" />
                            500.000đ - 1.000.000đ
                        </label>
                    </li>
                    <li>
                        <label htmlFor="filter-greater-1000">
                            <input type="radio" id="filter-greater-1000" name="filter-price" defaultValue="1000000-greater"
                                onClick={() => handlePrice("1000000-greater")}
                                defaultChecked={priceRange === '1000000-greater' ? 'true' : ''} />
                            <i className="fa" />
                            Giá trên 1.000.000đ
                        </label>
                    </li>
                </ul>
            </div>
        </>
    );
}
