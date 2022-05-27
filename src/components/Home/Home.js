import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ProductBrand from './ProductBrand';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <ProductBrand></ProductBrand>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;