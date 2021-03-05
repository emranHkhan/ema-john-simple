import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={`/product/${key}`}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>

                {/* <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                </button> */}

                {props.showAddToCart && <div>
                    <Button variant="contained" color="primary" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: 10 }} />Add to cart</Button>
                </div>} 
            </div>
        </div>
    );
};

export default Product;