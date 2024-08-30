// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SearchInput from './SearchInput';
// import ProductPage from './ProductPage';
// import ShoppingCart from './ShoppingCart';
// import Products from './Products';
// import Cart from './Cart';
// function App() {
//     const [cartItems, setCartItems] = useState([]);
//
//     const products = [
//         { id: 1, name: "Ապրանք 1", price: 1000 },
//         { id: 2, name: "Ապրանք 2", price: 990 },
//         { id: 3, name: "Ապրանք 3", price: 1000 },
//         { id: 4, name: "Ապրանք 4", price: 1000 },
//         { id: 5, name: "Ապրանք 5", price: 9900 },
//         { id: 6, name: "Ապրանք 6", price: 1130 },
//         { id: 7, name: "Ապրանք 7", price: 1200 },
//         { id: 8, name: "Ապրանք 8", price: 1800 },
//         { id: 9, name: "Ապրանք 9", price: 900 },
//     ];
//
//     const addToCart = (product) => {
//         setCartItems((prevItems) => [...prevItems, product]);
//     };
//
//     const removeFromCart = (productId) => {
//         setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
//     };
//
//
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<SearchInput />} />
//                 <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
//                 <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
//                 <Route path="/product/:id" element={<ProductPage />} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchInput from './SearchInput';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
import Products from './Products';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: "Ապրանք 1", price: 1000 },
        { id: 2, name: "Ապրանք 2", price: 990 },
        { id: 3, name: "Ապրանք 3", price: 1000 },
        { id: 4, name: "Ապրանք 4", price: 1000 },
        { id: 5, name: "Ապրանք 5", price: 9900 },
        { id: 6, name: "Ապրանք 6", price: 1130 },
        { id: 7, name: "Ապրանք 7", price: 1200 },
        { id: 8, name: "Ապրանք 8", price: 1800 },
        { id: 9, name: "Ապրանք 9", price: 900 },
    ];

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchInput />} />
                <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
