import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const cardTitle = ["Opening Hours", "Visit our location", "Contact us now"];
    const description = ["10 AM - 4 PM", "Brooklyn, NY 10036, United States", "+000 123 456789"];

    return (
        <div
            className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard
                bgClass={"bg-gradient-to-r from-secondary to-primary"}
                cardTitle={cardTitle[0]}
                description={description[0]}
                img={clock}></InfoCard>

            <InfoCard bgClass={"bg-accent"}
                cardTitle={cardTitle[1]}
                description={description[1]}
                img={marker}></InfoCard>

            <InfoCard
                bgClass={"bg-gradient-to-r from-secondary to-primary"}
                cardTitle={cardTitle[2]}
                description={description[2]}
                img={phone}></InfoCard>
        </div>
    );
};

export default Info;