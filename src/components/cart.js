import {useContext} from 'react';
import {Link} from 'react-router-dom';
import CartContext from "../contexts/CartContext";

const Cart = ({addToCart, removeFromCart}) => {
    const cart = useContext(CartContext);

    const handleClickAdd = item => () => addToCart(item);
    const handleClickRemove = item => () => removeFromCart(item);


    if (!cart.length)
        return (
            <h2>Your cart is empty. Add some <Link to="/">products</Link> first</h2>
        )
    else
        return (
            <ul className="list-group">
                {cart.map(item => (
                    <li className="list-group-item">
                        <div className="product">
                            <div className="product-left">
                                <img src={item.url} alt={item.name} className="product-image"/>
                                <div className="product-title">{item.name}</div>
                                <div className="product-description">{item.description}</div>
                            </div>
                            <div className="product-right">
                                <div className="product-price">${item.price}</div>
                                <div className="cart-controls">
                                    <button className="cart-btn-rm" onClick={handleClickRemove}>
                                        -
                                    </button>
                                    <span className="cart-qty">
                                        {item.qty}
                                    </span>
                                    <button className="cart-btn-add" onClick={handleClickAdd}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
};

export default Cart