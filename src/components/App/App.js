import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "../header/header";
import AddProduct from "../add-product/add-product";
import Products from "../products/products";
import Cart from "../cart/cart";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
      <Router>
        <div className="container">
            <Header/>
            <Route exact path="/">
                <Products/>
            </Route>
            <Route path="/add-product">
                <AddProduct/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
        </div>
      </Router>
  );
}

export default App;
