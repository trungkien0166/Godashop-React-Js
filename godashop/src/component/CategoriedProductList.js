import React from 'react';
import ProductList from './ProductList ';

export default function CategoriedProductList({ categoriedProducts }) {
    return (
        <>
            {
                categoriedProducts.map((categoriedProduct, index) =>
                    <div key={index} className="row equal">
                        <div className="col-xs-12">
                            <h4 className="home-title">{categoriedProduct.categoryName}</h4>
                        </div>

                        <ProductList products={categoriedProduct.items} />
                    </div>)
            }

        </>
    );
}
