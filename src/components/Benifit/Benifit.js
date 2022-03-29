import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benifit = (props) => {
    const { benifit } = props
    return (
        <div>
            <p className='flex items-center mt-3'><CheckCircleIcon className='w-5 h-5 text-green-600 mr-3'></CheckCircleIcon>
                {benifit}
            </p>
        </div>
    );
};

export default Benifit;