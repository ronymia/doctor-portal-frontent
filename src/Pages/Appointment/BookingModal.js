import React from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, date }) => {
    // const { register, handleSubmit } = useForm();
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const email = event.target.email.value;
        const number = event.target.number.value;

        console.log(name);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary uppercase">Booking for : {name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
                        <input type="text" name='date'
                            // {...register('date', { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            value={format(date, 'PP')}
                            disabled />
                        <select name='slot'
                            // {...register('slot', { required: true })}
                            className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =>
                                    <option
                                        key={index}
                                        value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name'
                            // {...register("name", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Full Name'
                        />
                        <input type="number" name='number'
                            // {...register("number", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Phone Number'
                        />
                        <input type="email" name='email'
                            // {...register("email", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Email'
                        />
                        <input type="Submit"
                            className="btn btn-secondary bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 rounded-lg w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;