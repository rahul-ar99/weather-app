import React from 'react';

const Forecast = (props) => {
    return (
        <div>
            <div className="block items-center justify-start mt-6">
                <p className='text-white font-medium uppercase'>{props.title}</p>
                <hr className="my-2" />
                <div className="flex flex-row items-center justify-between text-white">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">04:32pm</p>
                        <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunImage" />
                        <p className="font-medium">22°</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">04:32pm</p>
                        <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunImage" />
                        <p className="font-medium">22°</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">04:32pm</p>
                        <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunImage" />
                        <p className="font-medium">22°</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">04:32pm</p>
                        <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunImage" />
                        <p className="font-medium">22°</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">04:32pm</p>
                        <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunImage" />
                        <p className="font-medium">22°</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;