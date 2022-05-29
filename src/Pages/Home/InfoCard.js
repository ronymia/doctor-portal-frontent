import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
    return (
        <div
            className={`card lg:card-side shadow-xl text-white px-8 ${bgClass}`}>
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;