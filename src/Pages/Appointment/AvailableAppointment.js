import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import BookingSlot from './BookingSlot';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')
    const { data: bookingSlots, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h3 className=' text-center text-secondary my-5'>Available Appointment on {format(date, 'PP')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
                {
                    bookingSlots?.map(bookingSlot => <BookingSlot
                        key={bookingSlot._id}
                        bookingSlot={bookingSlot}
                        setTreatment={setTreatment}
                    />)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />}
            </div>
        </div>
    );
};

export default AvailableAppointment;