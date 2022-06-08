import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor;

    const handleDoctorDelete = (email) => {

        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} Successfully delete`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 mask mask-hexagon">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDoctorDelete(email)} class="btn btn-xs btn-warning">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;