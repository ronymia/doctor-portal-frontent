import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingSlot from './BookingSlot';

const AvailableAppointment = ({ date }) => {
    const [bookingSlots, setBookingSlots] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setBookingSlots(data))
    }, []);

    return (
        <div>
            <h3 className=' text-center text-secondary my-5'>Available Appointment on {format(date, 'PP')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
                {
                    bookingSlots.map(bookingSlot => <BookingSlot
                        key={bookingSlot._id}
                        bookingSlot={bookingSlot}
                        setTreatment={setTreatment}
                    />)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment} />}
            </div>
        </div>
    );
};

export default AvailableAppointment;