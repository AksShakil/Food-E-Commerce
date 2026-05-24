import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFilterSharp } from "react-icons/io5";


const Responsivefilter = () => {


    const [showAll, setShowall] = useState(false);

    return (
        <div>

                 <div className="lg:hidden "><div>
            
            </div>

            <div className='flex items-center justify-center w-full gap-5 mt-4 mb-5'>

          <button onClick={() => {

                    setShowall(!showAll)

                }}   className='border rounded-full px-1 py-1 bg-gray-200'>
                       <IoFilterSharp />
                </button>


                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Cheese</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Yogurt</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Milk</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Egg</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Cream</NavLink>
                 </div>
                 
    
</div>


  
            <div className={`${showAll ? 'flex' : 'hidden'} flex 
            items-center justify-center w-full gap-5 ml-5`}>

                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Yogurt</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Cheese</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Cream</NavLink>
                 </div>

                   <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Milk</NavLink>
                 </div>

                 
                 <div className="flex items-center justify-center gap-2 px-3 py-1 border rounded-full
                     hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]
                      hover:bg-[#B6349A] hover:text-white w-fit text-[13px]">
                   <NavLink to='/orange'>Egg</NavLink>
                 </div>
                 
    
</div>    


                 </div>
        </div>
    );
};

export default Responsivefilter;