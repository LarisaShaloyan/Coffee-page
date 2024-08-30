import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    const location = useLocation();
    const { product } = location.state || {};

    return (
        <div className="product-page">
            <h1>Product ID: {id}</h1>
            {product ? (
                <>

                    <h2> Անվանում: {product.name}</h2>
                    <img src= {product.img}/>
                    <h4>Price: {product.price} դրամ</h4>
                    <description>{product.description}</description>
                </>
            ) : (
                <p>Product not found</p>
            )}

        </div>

    );
}

export default ProductPage;
