import React from 'react';
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BallTriangle
                height="200"
                width="200"
                color='red'
                ariaLabel='loading'
            />
        </div>
    );
};

export default Loading;