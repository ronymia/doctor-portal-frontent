import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bg})`,

        }}
            className="hero w-full min-h-screen bg-cover">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                <img src={chair} className="max-w-xl rounded-lg shadow-2xl" alt='The Dentist Portal' />
                <div className='card shadow-2xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;