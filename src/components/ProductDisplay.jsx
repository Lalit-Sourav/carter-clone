import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from '../context/StroreContext';
import './ProductDisplay.css';

const ProductDisplay = () => {
    const { addToCart ,addToWishlist} = useContext(StoreContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-main">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img-zoom">
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-style">
                    <p>{product.description}</p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <button>XL</button>
                        <button>L</button>
                        <button>M</button>
                        <button>S</button>
                        <button>XS</button>
                    </div>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-new-price">
                        ${product.price?.toFixed(2)}
                    </div>
                </div>
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
                <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
