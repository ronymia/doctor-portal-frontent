import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={
            { background: `url(${appoinment})` }
        }
            className='flex gap-5 justify-center items-center mt-10'>
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1 text-white pr-20">
                <h3 className='text-lg text-primary font-medium'>Appointment</h3>
                <h2 className='text-3xl font-semibold my-3'>Make an appointment Today</h2>
                <p className='leading-relaxed mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;