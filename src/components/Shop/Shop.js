import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstFive = fakeData.slice(0, 5);
    const [products, setProducts] = useState(firstFive);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingkey => {
            const product = fakeData.find(pd => pd.Key = existingkey);
            product.quantity = savedCart[existingkey];
            return product;
        });
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        // const toBeAddedKey = product.key;
        let count = 1;
        let newCart;

        const sameProduct = cart.find(pd => pd.key === product.key);

        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    products.map(pd => <Product key={pd.key} product={pd} handleAddProduct={handleAddProduct} showAddToCart={true}></Product>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><Button variant="contained" color="primary">Review Order</Button></Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;