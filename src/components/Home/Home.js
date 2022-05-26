import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ProductBrand from './ProductBrand';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductBrand></ProductBrand>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;