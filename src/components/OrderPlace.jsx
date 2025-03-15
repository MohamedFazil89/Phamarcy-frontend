import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import "./styles/OrderPlace.css";

export default function OrderPlace() {
    const total = useSelector(state => state.cart.total);
    const cartItems = useSelector(state => state.cart.cartItems);
    const [orderConfirmed, setOrderConfirmed] = useState(true);
    const [PreviousOrder, setPreviousOrder] = useState(null);

    // For demonstration, a sample order item object.
    // In a real application, you may want to send the entire cartItems array.
    const NewOrders = {
        id: 1,
        img: "String",
        title: "Title",
        description: "description",
        price: "price",
    };

    useEffect(() => {
        // Confirm order after 3 seconds and post the order.
        const timer = setTimeout(() => {
            setOrderConfirmed(false);
        }, 3000);
        handelPostFetchOrder();
    
        return () => clearTimeout(timer);
    }, []);

    const handelPostFetchOrder = async () => {
        try {
            const response = await axios.post("http://localhost:5000/OrderPlace", {
                email: "nmohammedfazil790@gmail.com",
                NewOrders,
            });
            console.log("Order placed:", response.data);
            setPreviousOrder(response.data);
        } catch (err) {
            console.error("Error placing order:", err);
        }
    };

    return (
        <>
        {!orderConfirmed ? (
            <div className='Order-container'>
                <div className="Ordered-Cart-items">
                    <h1 style={{ margin: "1rem" }}>Order confirmed!</h1>
                    {cartItems.map((item, index) => (
                        <div key={item.id || `cart-item-${index}`} className="Ordered-carditem">
                            <img src={item.img} alt={item.title} className="Ordered-Item-image" />
                            <span className="Ordered-Card-details">
                                <p className="Ordered-Name">{item.title}</p>
                                <p className="Ordered-Rate">${item.price}</p>
                            </span>
                        </div>
                    ))}
                    <p className='Ordered-Total'>Payment Successful</p>
                    <p className='Ordered-deviler'>Order delivered in 2 days</p>
                </div>
                <p className='Ordered-history-title'>Order History</p>
                <section className="ordered-history-items">
                    {PreviousOrder ? (
                        <div>
                            <p>User: {PreviousOrder.user}</p>
                            {PreviousOrder.OrderItems.map((orderItem, idx) => (
                                <div key={orderItem.id || idx}>
                                    <p>{orderItem.title}</p>
                                    <p>{orderItem.description}</p>
                                    <p>${orderItem.price}</p>
                                </div>
                            ))}
                        </div>
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
