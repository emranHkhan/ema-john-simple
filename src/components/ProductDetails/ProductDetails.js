import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {

    const {productKey} = useParams() //this productKey is sent from the <Route> component and this is the dynamic part of the Route component i.e <Route path="/product/:productKey"
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <Product showAddToCart={false} product={product}/>
        </div>
    );
};

export default ProductDetails;