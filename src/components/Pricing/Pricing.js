import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0},
        {id: 2, name: 'Regular', price: 7.5},
        {id: 3, name: 'Premium', price: 12.22}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h1 className='text-6xl font-serif text-white'>Best Deals of the club</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni cumque eius magnam possimus rem autem consectetur numquam modi eveniet.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-6'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;