import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import "./styles/OrderPlace.css";

export default function OrderPlace() {
    const total = useSelector(state => state.cart.total);
    const cartItems = useSelector(state => state.cart.cartItems);
    const [orderConfirmed, setOrderConfirmed] = useState(true);
    const [previousOrders, setPreviousOrders] = useState([]);

    // For demonstration, we're sending the entire cartItems array as the new order.
    const NewOrders = cartItems;

    // Replace with the actual user's email
    const userEmail = "nmohammedfazil790@gmail.com";

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrderConfirmed(false);
        }, 3000);
        handelPostFetchOrder();
    
        return () => clearTimeout(timer);
    }, []);

    const handelPostFetchOrder = async () => {
        try {
            // Post the new order
            const postResponse = await axios.post("http://localhost:5000/OrderPlace", {
                email: userEmail,
                NewOrders,
            });
            console.log("Order placed:", postResponse.data);

            // Fetch order history for the user
            const getResponse = await axios.get("http://localhost:5000/OrderHistory", {
                params: { email: userEmail }
            });
            console.log("Order history:", getResponse.data);
            setPreviousOrders(getResponse.data);
        } catch (err) {
            console.error("Error placing order:", err);
        }
    };

    return (
        <>
        {!orderConfirmed ? (
            <div className='Order-container'>
                <div className="Ordered-Cart-items">
                    <h1 style={{ margin: "1rem" }}> confirmed Order!</h1>
                    {cartItems.map((item, index) => (
                        <div key={item.id || `cart-item-${index}`} className="Ordered-carditem">
                            <img src={item.img} alt={item.title} className="Ordered-Item-image" />
                            <span className="Ordered-Card-details">
                                <p className="Ordered-Name">{item.title}</p>
                                <p className="Ordered-Rate">${item.price}</p>
                            </span>
                        </div>
                    ))}
                   {cartItems != "" ? <p className='Ordered-Total'>Payment Successful</p> : ""}
                    {cartItems != "" ? <p className='Ordered-deviler'>Order delivered in 2 days</p> 
                    : <p className='Ordered-deviler'>Empty Cart</p>}
                </div>
                <p className='Ordered-history-title'>Order History</p>
                <section className="ordered-history-items">
                    {previousOrders.length > 0 ? (
                        previousOrders.map((order, index) => (
                            <div key={order._id || index} className="order-history">
                                {order.OrderItems.map((orderItem, idx) => (
                                    <div key={orderItem.id || idx} className="order-history-card">
                                        <img src={orderItem.img} alt={orderItem.title} className="order-history-img" />
                                        <div className="order-history-details">
                                            <p className="order-history-title">{orderItem.title}</p>
                                            <p className="order-history-description">{orderItem.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No previous orders</p>
                    )}
                </section>
            </div>
        ) : (
           <section className="orderConfirm">
             <p className='OrderTitle'>Order Confirmed!</p>
           </section>
        )}
        </>
    );
}
