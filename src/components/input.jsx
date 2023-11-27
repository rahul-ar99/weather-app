import React from 'react';
import {UilSearch,UilLocationPoint} from '@iconscout/react-unicons'

const Input = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input 
                    type="text"
                    placeholder='Search for City...'
                    className='text-xl font-medium p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                 />
                 <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                 <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-2xl text-white font-medium'>c°</button>
                <p className='text-white text-2xl mx-2 cursor-default'>|</p>
                <button name='metric' className='text-2xl text-white font-medium'>f°</button>
            </div>
        </div>
    );
};

export default Input;