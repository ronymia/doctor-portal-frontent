import React from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    // const { register, handleSubmit } = useForm();
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user?.email,
            patientName: user?.displayName,
            phone: event.target.number.value
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Your Appointment set ${formattedDate} at ${slot}`)
                }
                else {
                    toast(`Your already have an appointment on ${formattedDate} at ${slot}`)
                }
                refetch();
                //for closing the modal
                setTreatment(null);
            })
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
                        <input type="text" name='name' value={user?.displayName} disabled
                            // {...register("name", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Full Name'
                        />

                        <input type="email" name='email' value={user?.email} disabled
                            // {...register("email", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Email'
                        />
                        <input type="number" name='number'
                            // {...register("number", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Phone Number'
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