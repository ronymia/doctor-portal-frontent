import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [myAppointments, setMyAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyAppointment(data);
                });
        }
    }, [user, navigate])

    return (
        <div className="overflow-x-auto">
            <h1 className='text-center text-xl font-medium my-3'>My Appointment : {myAppointments.length}</h1>
            <table className="table w-full">
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