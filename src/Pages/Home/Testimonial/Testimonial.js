import React from 'react';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from '../../../assets/icons/quote.svg';
import PatientsFeedback from './PatientsFeedback';

const Testimonial = () => {
    const feedbacks = [
        {
            _id: 1,
            name: "Winson Herry",
            img: people1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country: "California"
        },
        {
            _id: 2,
            name: "Winson Herry",
            img: people2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country: "California"
        },
        {
            _id: 3,
            name: "Winson Herry",
            img: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country: "California"
        },
        {
            _id: 4,
            name: "Winson Herry",
            img: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country: "California"
        }
    ]

    return (
        <div className="my-24 px-12">
            <div className="flex items-center justify-between my-4">
                <div className="">
                    <h3 className='text-secondary text-lg font-medium'>Testimonial</h3>
                    <h2 className='text-accent text-4xl'>What Our Patients Says</h2>
                </div>
                <div className="">
                    <img className='w-24 h-20 lg:w-48 lg:h-40' src={quote} alt="" />
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    feedbacks.map(feedback => <PatientsFeedback
                        key={feedback._id}
                        feedback={feedback}
                    ></PatientsFeedback>)
                }
            </div>
        </div>
    );
};

export default Testimonial;