import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        }
    ];

    return (
        <div className='mt-20'>
            <div className=" text-center uppercase font-medium">
                <h4 className='text-primary text-xl'>our service</h4>
                <h3 className='text-accent text-4xl'>Services We Provide</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <ServiceDetail />
        </div>
    );
};

export default Services;