import React from 'react';
import NavBar from '../Navbar'
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import { useState } from 'react';
import Madein from './madein'
import Remember from './Remember';
import Scrolling from './scrolling'
import rec1 from '../../assets/rec1.png'
import rec2 from '../../assets/rec2.png'
import Fooditem from '../../component/orange/fooditem'
import Milk from '../../component/orange/Mlik'
import Egg from '../orange/Egg'
import Responsivefilter from './Responsivefilter';


const Orange = () => {

  const [isRight, setIsRight] = useState(false);
  const [isRightt, setIsRightt] = useState(false);
  const [isRighttt, setIsRighttt] = useState(false);
   const [isRigh, setIsRigh] = useState(false);
   const [isRig, setIsRig] = useState(false);
   const [isRi, setIsRi] = useState(false);
   const [isR, setIsR] = useState(false);

    return (
        <div>

           <NavBar></NavBar>

           <div className='flex px-8 gap-5 mt-5'>

              <div className='hidden lg:flex block  justify-between items-center w-[18%]'>
                 <h2>Filters</h2>
                 <h2 className='text-[#B6349A]'>Reset</h2>

            </div>


            <div className='w-full lg:w-[82%] pl-5'>
            
                    <Scrolling></Scrolling>
                       <Responsivefilter></Responsivefilter>

            </div>

           </div>

          

            
        <div className='flex px-[30px] py-[30px]'>

           <div className="hidden lg:block filter bg-[#F8F7F8] border rounded-xl w-[18%] h-fit">
           



        <div className='px-5 py-8'>

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


        <h2 className='mt-4 font-semibold'>Price</h2>



         <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRigh(!isRigh)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRigh ? "bg-gray-400" : "bg-gray-400"
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRigh ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>
                All</p> 

        </div>

        
        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRig(!isRig)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRig ? "bg-gray-400" : "bg-gray-400"
            }`}
            >

            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRig ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>$4-12$</p> 

        </div>

        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsRi(!isRi)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isRi ? "bg-gray-400" : "bg-gray-400"
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isRi ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>$4-12$</p> 

        </div>
        
        <div className='flex gap-3 mt-4'>

            <div
            onClick={() => setIsR(!isR)}
            className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                isR ? "bg-gray-400" : "bg-gray-400 "
            }`}
            >
            <div
                className={`w-4 h-4 bg-[#B6349A] rounded-full shadow-md transition-all duration-300 ${
                isR ? "ml-auto mr-1" : "ml-1 bg-[#FFFFFF]"
                }`}
            />

            </div>  <p className='mt-[-2px] font-semibold'>$4 & Above</p> 

        </div>
        

        </div>

     

                <Madein></Madein>
                <Remember></Remember>

        
            
           
           </div>



           <div className=" fooditems w-[82%] pl-5 mt-[4px]">


            <div className="hidden lg:flex justify-center items-center  overflow-hidden w-full">
            <div className="flex gap-4 animate-left">
                <img src={rec1} alt="" className="rounded-3xl" />
                <img src={rec2} alt="" className="rounded-3xl" />
                <img src={rec1} alt="" className="rounded-3xl" />

                <img src={rec2} alt="" className="rounded-3xl" />
                <img src={rec1} alt="" className="rounded-3xl" />
                <img src={rec1} alt="" className="rounded-3xl" />
            </div>
            </div>

                <div className=''>
                  <Fooditem></Fooditem>
               
                  <Milk></Milk>
                  <Egg></Egg>
                </div>
                


           </div>
        </div>


          




           <Footer></Footer>
          
        </div>
    );
};

export default Orange;