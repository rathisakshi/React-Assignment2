import React from 'react';
import {  useState , useEffect} from "react";
import axios from "axios";
import './Product.css';
function ProductPage() {
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // Load cart items from local storage
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(savedCartItems);

        fetch("/product.json")
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Increment the quantity if the product is already in the cart
            const updatedCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Add the product to the cart with a quantity of 1
            const newCartItem = { id: product.id, name: product.name, price: product.price, quantity: 1 };
            setCartItems([...cartItems, newCartItem]);
        }
    };

    // Save cart items to local storage whenever the cart items state changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);



    return (


        <div className="product-container">
            <ul className="product-card">
                {product.map((product, index) => (
                    <li className="product" key={index}>
                        <div className="product-img">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price} Rs</p>
                            <button onClick={ () => {if(window.confirm("Are you sure to add product in cart "))
                            { handleAddToCart(product)};}} className="cart">Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;
