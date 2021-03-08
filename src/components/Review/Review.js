import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();

        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);


    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt=""></img>
    }

    return (
        <div className="twin-container">
            
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd} key={pd.key}></ReviewItem>)
                }

                {
                    thankYou
                }

            </div>
            
            <div className="cart-container">
                <Cart cart={cart}>
                    <Button variant="contained" color="primary" onClick={handlePlaceOrder}>Place Order</Button>
                </Cart>
            </div>

        </div>
    );
};

export default Review; <h1>this is review</h1>