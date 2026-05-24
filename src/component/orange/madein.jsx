import React from 'react';

import { useState } from 'react';

const madein = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiv, setIsActiv] = useState(false);
    const [isActi, setIsActi] = useState(false);
    const [isAct, setIsAct] = useState(false);

    return (
        <div className='px-5 font-semibold '>
            <h2>Made in</h2>


    <div className="flex mt-5 gap-5">
      <button
        onClick={() => setIsActive(!isActive)}
        className={`w-6 h-6 flex items-center justify-center rounded-full
         border-2  duration-300  ${isActive ? " border-pink-600" : " border-gray-300"}`}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isActive ? "w-2 h-2 bg-pink-600" : "w-0 h-0"
          }`}
        />
      </button>  <p>All</p>
    </div>

       <div className="flex mt-5 gap-5">
      <button
        onClick={() => setIsActiv(!isActiv)}
        className={`w-6 h-6 flex items-center justify-center rounded-full
         border-2  duration-300  ${isActiv ? " border-pink-600" : " border-gray-300"}`}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isActiv ? "w-2 h-2 bg-pink-600" : "w-0 h-0"
          }`}
        />
      </button>  <p>United States</p>
    </div>

    <div className="flex mt-5 gap-5">
      <button
        onClick={() => setIsActi(!isActi)}
        className={`w-6 h-6 flex items-center justify-center rounded-full
         border-2  duration-300  ${isActi ? " border-pink-600" : " border-gray-300"}`}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isActi ? "w-2 h-2 bg-pink-600" : "w-0 h-0"
          }`}
        />
      </button>  <p>United States</p>
    </div>


    <div className="flex mt-5 gap-5">
      <button
        onClick={() => setIsAct(!isAct)}
        className={`w-6 h-6 flex items-center justify-center rounded-full
         border-2  duration-300  ${isAct ? " border-pink-600" : " border-gray-300"}`}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isAct ? "w-2 h-2 bg-pink-600" : "w-0 h-0"
          }`}
        />
      </button><p>Remember me</p>
    </div>




        </div>
    );
};

export default madein;