import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';
import NavBar from "./Nav"



export default function ProductPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
            <NavBar />

      <p>Medical Devices</p>
      <ul>
        
        <div className="Cart-container" id='Equipment'>
          {data.medicaldevices.map((item, index) =>(
            <Cart
            key={index}
            img={item.img}
            price={item.price}
            title={item.title}
            description={item.description}
             />
          ))}
          </div>
        </ul>
      
    </div>
  );
}
