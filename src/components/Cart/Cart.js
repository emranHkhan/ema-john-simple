
import { Button } from '@material-ui/core';
import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price * product.quantity;
        
    // }

    const total = cart.reduce((total, pd) =>  total + pd.price * pd.quantity, 0)
    
    let shippingCost = 0;
    if (total > 0 && total < 20) {
        shippingCost = 4.99;
    }

    else if (total > 20 && total < 50) {
        shippingCost = 6.99;
    }
    else if (total > 50) {
        shippingCost = 12.99;
    }
   
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Tax: {tax}</p>
            <p><small>Shiping Cost: {shippingCost}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br />
            {
                props.children
            }

        </div>
    );
};

export default Cart;