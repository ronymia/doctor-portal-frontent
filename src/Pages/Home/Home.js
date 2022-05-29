import React from 'react';
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
        </div>
    );
};

export default Home;