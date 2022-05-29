import React from 'react';
import { useForm } from 'react-hook-form';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className='mb-24 flex flex-col justify-center items-center'>
            <div className="flex flex-col w-1/2 justify-center items-center p-5">
                <div className="text-center">
                    <h4 className='text-secondary font-medium text-lg'>Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay Connect With Us</h2>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex gap-y-5 flex-col justify-center items-center w-full pt-5'>
                    <input type="text"
                        {...register("email", { required: true })}
                        className="input w-full max-w-xs"
                        placeholder="Email Address" />
                    <input type="text"
                        {...register("subject", { required: true })}
                        className="input w-full max-w-xs"
                        placeholder="Subject" />
                    <textarea
                        {...register("message", { required: true })}
                        className="textarea textarea-bordered w-full max-w-xs h-4/5"
                        placeholder="Your Message"></textarea>
                    <input type="submit"
                        className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary border-0" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;