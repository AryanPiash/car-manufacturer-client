import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;