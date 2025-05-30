import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from 'react-router-dom';
import "./styles/CardList.css";

export default function CardMenu({ width, OpenCard }) {
  const Navigation = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems); 
  const total = useSelector(state => state.cart.total); 
  const dispatch = useDispatch();

  return (
    <div className="Card-Container" style={{ width: width }}>
      <p style={{ color: "white", textAlign: "right", cursor: "pointer" }} onClick={OpenCard}>X</p>

      <section className="carditem">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={item.id || `cart-item-${index}`} className="carditem">
              <img src={item.img} alt={item.title} className="Item-image" />
              <span className="Card-details">
                <p className="Name">{item.title}</p>
                <p className="Rate">₹{item.price}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </span>
            </div>
          ))
        )}
      </section>

      <div className="total">
        <p>Total: ₹{total.toFixed(2)}</p>
        <button onClick={() => Navigation("/OrderPlace")}>Buy Now</button>
      </div>
    </div>
  );
}
