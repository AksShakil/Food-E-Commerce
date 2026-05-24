import React from 'react';
import { useState } from 'react';
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';

import { FaArrowRightLong } from "react-icons/fa6";
import card from '../../assets/Card.png'





const Trendingfavtwo = () => {

      const [showAll, setShowAll] = useState(false);
        
        
          const products = [
            { id: 1, img: image1, name: "Apple", currency: "$2.71/lb", price: 99.99, have: 12, sold:12 },
            { id: 2, img: image3, name: "Orange", currency: "$3.20/lb", price: 99.99, have: 12, sold:12 },
            { id: 3, img: image1, name: "Banana", currency: "$1.50/lb", price: 99.99, have: 12, sold:12 },
            { id: 4, img: image3, name: "Mango", currency: "$4.00/lb", price: 99.99, have: 12, sold:12 },
            { id: 5, img: image1, name: "Grapes", currency: "$5.10/lb", price: 99.99, have: 12, sold:12 },
            { id: 6, img: image3, name: "Pineapple", currency: "$6.00/lb", price: 99.99, have: 12, sold:12 },
            { id: 7, img: image4, name: "Orange", currency: "$3.20/lb", price: 99.99, have: 12, sold:12 },
        
          ];
    

    return (

        <div className=' bg-[#FAF8F9] rounded-2xl py-[50px] mt-[100px]'>

                 <div className="relative mt-[20px] rounded-3xl  bg-[#FFFFFF] w-11/12 mx-auto py-8">
            <p className='text-[#B6349A] sm:hidden ml-8'>Get 10% offer</p>
             <div className=" flex item-center px-[30px] mb-[30px]">
               <h2 className="font-bold text-3xl  sm:w-full sm:text-xl w-[180px] min-[641px]:max-[813px]:text-3xl min-[641px]:max-[813px]:w-[180px]">Trending Store Favorites</h2>
              

          

             


                   <div className="absolute top-0 right-0 flex flex-col justify-end bg-[#B6349A] px-7 py-7
                   rounded-bl-3xl rounded-tr-3xl ">

                    <h2 className='whitespace-nowrap text-white'>Freshness Guarantee </h2> 
                    <h2 className='whitespace-nowrap text-white text-[25px] mt-[5px] mb-[10px]'> Weekly sold 1k+</h2>
                   

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="font-semibold text-black border rounded-3xl flex
                         items-center justify-center bg-white w-fit px-3 py-1 text-[12px]"
                    >
                        {showAll ? "Show Slider" : (
                        <span className='flex items-center gap-2 whitespace-nowrap'>
                            View More <FaArrowRightLong />
                        </span>
                        )}
                    </button>
                    </div>

                      


                     <div className="btn"><br></br></div>

             </div>

            
            
             <div className="px-[30px] ">


  <div className='hidden sm:flex justify-left items-center gap-3 mb-7'>

             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[12px]
               font-semibold sm:text-[14px] hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[12px]
                sm:text-[14px] font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[12px]
                sm:text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[12px]
                sm:text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             

</div>
 

<div className='hidden sm:flex justify-left items-center gap-3 mb-7'>

             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             <NavLink><p className='bg-base-200 flex justify-center
              items-center px-3 py-2 border rounded-3xl text-[14px]
               font-semibold hover:border-[#B6349A]'>Fresh Bekary</p></NavLink>
             

</div>
 
               
       
               {showAll ? (
                
                 <div className="grid grid-cols-4 md: grid grid-cols-2 sm: grid grid-cols-1 gap-5">
       
                   {products.map((item) => (
                     <div key={item.id} className="flex gap-4 items-center border p-3 rounded-xl">
       
                       <img
                         className="rounded-lg bg-[#FEF5FD]"
                         src={item.img}
                         alt={item.name}
                       />
       
                       <div>
                         <p className="font-semibold">{item.name}</p>
                         <p className="font-semibold">{item.currency}</p>
                         <p className="text-gray-500">{item.price}</p>
                         <p className="text-gray-500">{item.have}</p>
                         <p className="text-gray-500">{item.sold}</p>
                       </div>
       
                     </div>
                   ))}
       
                 </div>
               ) : (
                 <Swiper
                   slidesPerView={5}
                   spaceBetween={15}
                   navigation={{
                       nextEl: ".Nex",
                       prevEl: ".Pre",
                   }}
                   modules={[Navigation]}
                   breakpoints={{
                     320: { slidesPerView: 1 },
                     640: { slidesPerView: 2 },
                     768: { slidesPerView: 3 },
                     1024: { slidesPerView: 5 },
                   }}
                 >
       
                   {products.map((item) => (
                     <SwiperSlide key={item.id}>
       
                       <div className="bg-white rounded-xl p-2 shadow">
       
                         <img
                           className="w-full h-[180px] object-cover rounded-xl bg-gray-200 mb-3"
                           src={item.img}
                           alt={item.name}
                         />

                          <p className="font-semibold">{item.name}</p>
                         <p className="font-semibold">{item.currency}</p>
                         <p className="text-gray-500">{item.price}</p>            
                         <p className="text-gray-500">{item.have} have</p>
                         <p className="text-gray-500">{item.sold} left</p>
                        
                       </div>
       
                     </SwiperSlide>
                   ))}
       
                 </Swiper>
               )}
       
             </div>
           </div>











           <div className='block sm:hidden' >
            <img className='w-11/12 m-auto mt-[50px] h-[200px]' src={card} alt="" />

               <div className='mt-[-150px]'>
                     <h2 className='flex justify-center items-center text-[#B6349A]'>Get 10% OFF On Your First Order 
                </h2>
                <h2 className='flex justify-center items-center mt-[10px] mb-[10px]'>Order Now Your Grocery!</h2>

                <div className="btn flex justify-center items-center">
                    <button className='bg-[#B6349A] px-2 py-2 rounded-3xl text-white text-[14px]'>Show Now</button>
                </div>
               </div>
           
           </div>

        </div>
         
    );
};

export default Trendingfavtwo;