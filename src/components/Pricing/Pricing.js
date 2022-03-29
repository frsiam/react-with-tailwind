import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benifits: [
            'lifetime access',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 2, name: 'Regular', price: 7.5, benifits: [
            'everything on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 3, name: 'Premium', price: 12.22, benifits: [
            'everything on Regular',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h1 className='text-6xl font-serif text-white'>Best Deals of the club</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni cumque eius magnam possimus rem autem consectetur numquam modi eveniet.</p>
            <div className='grid md:grid-cols-3 2xl:gap-32 xl:gap-20 lg:gap-20 gap-10 md:mx-5 my-10 xl:mx-16 2xl:mx-40 sm:mx-32'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;