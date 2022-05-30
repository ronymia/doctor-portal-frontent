import React from 'react';

const BookingSlot = ({ bookingSlot }) => {
    const { name, slots, _id } = bookingSlot;

    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-center text-secondary text-lg font-medium">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className=' text-sm text-red-500 uppercase'>Try Another  Date</span>
                    }
                </p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div class="card-actions justify-center">
                    <button
                        class="btn btn-secondary bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 rounded-lg" disabled={slots.length === 0}
                    >Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingSlot;