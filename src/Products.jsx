import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products({ products, addToCart }) {
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div>
            <h2>Ապրանքներ</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} դրամ
                        <button onClick={() => handleAddToCart(product)}>Ավելացնել Զամբյուղում</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
