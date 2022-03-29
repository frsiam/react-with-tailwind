import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const {name, price, benifits} = props.option
    return (
        <div className='bg-white p-5 rounded-lg'>
            <h1 className='bg-indigo-300 py-3 rounded-md text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h2 className='text-xl text-left'>Benifits: </h2>
                {
                    benifits.map(benifit => <Benifit benifit={benifit}></Benifit>)
                }
            </div>
            <button className='bg-green-500 hover:text-black flex items-center py-3 mt-5 rounded-md w-full justify-center text-white font-semibold text-xl'>
                Buy Now <ArrowRightIcon className='w-5 h-5 ml-3'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;