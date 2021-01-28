import {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';

import ProductsContext from "../contexts/ProductsContext";

const Products = ({addToCart}) => {
    const history = useHistory();
    const products = useContext(ProductsContext);

    const handleClickToProduct = product => {   // Каррировано успешно
        return () => {
            addToCart(product);
            history.push('/cart');
        }
    };

    if (!products.length)
        return (
            <h2>You have no products. Please <Link to="/add-product">add new product</Link></h2>
        )
    else
        return (
            <ul className="list-group">
                {products.map(product =>
                    <li key={product.id} className="list-group item">
                        <div className="product">
                            <div className="product-left">
                                <img src={product.url} alt={product.name} className="product-image"/>
                                <div className="product-title">{product.name}</div>
                                <div className="product-description">{product.description}</div>
                            </div>
                            <div className="product-right">
                                <div className="product-price">
                                    ${product.price}
                                </div>
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={handleClickToProduct(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        )
};

export default Products