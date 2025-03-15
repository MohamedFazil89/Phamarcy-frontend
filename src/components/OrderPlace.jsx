import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import "./styles/OrderPlace.css"

export default function OrderPlace() {
    const total = useSelector(state => state.cart.total);
    const cartItems = useSelector(state => state.cart.cartItems);
    const [Order, setOrder] = useState(true);

    const [PreviousOrder, setOrders] = useState({
        id: 0,
        img: "",
        title: "",
        description: "",
        price: 0
    })
    const NewOrders = {
        id: 1,
        img: "String",
        title: "Title",
        description: "description",
        price: "price",

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrder(false);
        }, 3000);
        handelPostFetchOrder();
    
        // Cleanup to avoid memory leaks if the component unmounts early
        return () => clearTimeout(timer);
    }, []);
    

    const handelPostFetchOrder = async () => {
        try {
            const response = await axios.post("http://localhost:5000/OrderPlace", {
                email: "nmohammedfazil790@gmail.com",
                NewOrders,
            })
            console.log(response.data);
            setOrders(response.data)
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <>
        {!Order ? (
            <div className='Order-container'>
          
            <div className="Ordered-Cart-items">
            <h1 style={{ margin: "1rem"}}>Order confirmed!</h1>
            {cartItems.map((item, index) => (
                 <div key={item.id || `cart-item-${index}`} className="Ordered-carditem">
                     <img src={item.img} alt={item.title} className="Ordered-Item-image" />
                     <span className="Ordered-Card-details">
                         <p className="Ordered-Name">{item.title}</p>
                         <p className="Ordered-Rate">${item.price}</p>
                         <span className="order-devilary-details">
 
                         </span>
                     </span>
                 </div>
             ))}
             <p className='Ordered-Total'>Payment Successfull</p>
             <p className='Ordered-deviler'>Order deviler in 2 days</p>

 
            </div>
             <p className='Ordered-history-title'>Order Historys</p>
             <section className="ordered-history-items">
             {PreviousOrder.title}
             </section>
         </div>
        ) : (
           <section className="orderConfirm">
             <p className='OrderTitle'>Order Confirmed!</p>
           </section>
        )}
        </>
    )
}
