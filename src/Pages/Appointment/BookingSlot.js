import React from 'react';

const BookingSlot = ({ bookingSlot, setTreatment }) => {
    const { name, slots, _id } = bookingSlot;

    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-secondary text-lg font-medium">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className=' text-sm text-red-500 uppercase'>Try Another  Date</span>
                    }
                </p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        className="btn btn-secondary bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 rounded-lg"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(bookingSlot)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingSlot;