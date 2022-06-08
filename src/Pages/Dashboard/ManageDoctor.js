import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading";
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors',
        () => fetch('http://localhost:5000/doctor', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h3 className='text-center text-2xl font-medium my-4'>All Doctors : {doctors.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;