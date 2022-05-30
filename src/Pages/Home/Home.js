import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;