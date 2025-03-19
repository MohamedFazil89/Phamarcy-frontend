import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';
import NavBar from "./Nav";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        // Assuming your backend response structure is:
        // { Product_Collection: [ ... ] }
        const fetchedProducts = response.data.Product_Collection;
        console.log("Fetched products:", fetchedProducts);
        setProducts(fetchedProducts);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);
  const MedicalDevices = products.filter((product) => product.type === "medicaldevices")

  if (!products.length) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <div className="Cart-container" id="Equipment">
        {MedicalDevices.map((item, index) => (
          <Cart
            key={index}
            img={item.img}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
