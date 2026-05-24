import React from 'react';
import { useState } from 'react';

const Remember = () => {


     const [isRight, setIsRight] = useState(false);
      const [isRightt, setIsRightt] = useState(false);
      const [isRighttt, setIsRighttt] = useState(false);


    return (

    

        <div className='px-5 py-8'>

            <h2 className='font-semibold'>Made in</h2>
        
        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRightt(!isRightt)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRightt ? "bg-gray-400" : "bg-gray-400"
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRightt ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>Deals</p> 

        </div>

        
        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRight(!isRight)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRight ? "bg-gray-400" : "bg-gray-400"
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRight ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>New Arrival</p> 

        </div>

        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRighttt(!isRighttt)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRighttt ? "bg-gray-400" : "bg-gray-400"
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRighttt ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>Near Me</p> 

        </div>

            
        </div>
    );
};

export default Remember;