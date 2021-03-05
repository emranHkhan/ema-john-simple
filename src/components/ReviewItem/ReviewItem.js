
import { Button } from '@material-ui/core';
import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <p>quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <Button variant="contained" color="primary" onClick={() => props.removeProduct(key)}>Remove</Button>
        </div>
    );
};

export default ReviewItem;