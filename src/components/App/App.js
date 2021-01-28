import {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "../header/header";
import AddProduct from "../add-product/add-product";
import Products from "../products/products";
import Cart from "../cart/cart";

import {CartProvider} from "../../contexts/CartContext";
import {ProductsProvider} from "../../contexts/ProductsContext";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addProduct = product => {
        product.id = products.length + 1;
        setProducts([...products, product]);
    };

    return (
        <Router>
            <CartProvider value={cart}>
                <ProductsProvider value={products}>
                    <div className="container">
                        <Header/>
                        <Route exact path="/">
                            <Products/>
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
