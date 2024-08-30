
import React from 'react';

function ShoppingCart({ cartItems, removeFromCart }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h1>Գնումների Զամբյուղ</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price} դրամ
                        <button onClick={() => removeFromCart(item.id)}>Հեռացնել</button>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Ընդհանուր: {totalAmount} դրամ</h3>
            </div>
        </div>
    );
}

export default ShoppingCart;


