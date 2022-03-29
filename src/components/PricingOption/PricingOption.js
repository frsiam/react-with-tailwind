import React from 'react';

const PricingOption = (props) => {
    const {name, price} = props.option
    return (
        <div className='bg-white p-5 rounded-lg'>
            <h1 className='bg-indigo-300 py-3 rounded-md text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;