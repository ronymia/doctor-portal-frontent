import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <div className="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure className='pt-20 lg:pt-4'>
                <img src={img} alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-accent text-xl font-semibold">{name}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    );
};

export default Service;