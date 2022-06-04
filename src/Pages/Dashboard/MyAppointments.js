import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const MyAppointments = () => {
    const [myAppointments, setMyAppointment] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyAppointment(data));
        }
    }, [user]);

    return (
        <div class="overflow-x-auto">
            <h1 className='text-center text-xl font-medium my-3'>My Appointment : {myAppointments.length}</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAppointments.map((appointment, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;