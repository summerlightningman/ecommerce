import {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./header";
import AddProduct from "./add-product";
import Products from "./products";
import Cart from "./cart";

import {CartProvider} from "../contexts/CartContext";
import {ProductsProvider} from "../contexts/ProductsContext";

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addProduct = product => {
        product.id = products.length + 1;
        setProducts([...products, product]);
    };

    const addToCart = product => {
        if (cart.length) {
            const newCart = [...cart];
            const foundIndex = newCart.findIndex(item => item.id === product.id);
            if (foundIndex >= 0) {
                newCart[foundIndex]['qty'] += 1;
            } else {
                product.qty += 1;
                newCart.push(product);
            }
            setCart(newCart);
        } else {
            product.qty = 1;
            const newCart = [product];
            setCart(newCart);
        }
    };

    return (
        <Router>
            <CartProvider value={cart}>
                <ProductsProvider value={products}>
                    <div className="container">
                        <Header/>
                        <Route exact path="/">
                            <Products addToCart={addToCart}/>
                        </Route>
                        <Route path="/add-product">
                            <AddProduct addProduct={addProduct}/>
                        </Route>
                        <Route path="/cart">
                            <Cart/>
                        </Route>
                    </div>
                </ProductsProvider>
            </CartProvider>
        </Router>
    );
}

export default App;
