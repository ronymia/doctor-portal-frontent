import React from 'react';

const PatientsFeedback = ({ feedback }) => {
    const { name, img, description, country } = feedback;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className="flex gap-x-8 items-center pl-7 pb-7 ">
                <div className="avatar">
                    <div className="w-[75px] h-[75px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='loading...' />
                    </div>
                </div>
                <div className="">
                    <p>{name}</p>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default PatientsFeedback;