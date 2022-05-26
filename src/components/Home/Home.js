import React from 'react';
import Banner from './Banner';
import ProductBrand from './ProductBrand';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductBrand></ProductBrand>
        </div>
    );
};

export default Home;