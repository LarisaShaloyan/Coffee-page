import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    const itemCount = cartItems.length;
    console.log(Cart)

    return (
        <div>
            <Link to="/cart">
                <button>
                    Զամբյուղ ({itemCount} ապրանք) - {totalAmount} դրամ

                </button>
            </Link>
        </div>
    );
}

export default Cart;
