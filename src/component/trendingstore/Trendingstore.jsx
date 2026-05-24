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
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";





const Trendingstore = () => {

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
         <div className="mt-[120px]  border border-gray-200 rounded-lg w-11/12 mx-auto py-8">
       
             <div className=" flex item-center px-[30px] mb-[30px]">
               <h2 className="font-bold text-xl w-full">Trending Store Favorites</h2>

          

             
       
                   <div className="w-full flex justify-end mr-5">
       
                   <button
                           onClick={() => setShowAll(!showAll)}
                           className="font-semibold text-black border rounded-full flex
                            items-center justify-center border-[#6C2358] px-5 py-0"
                           >
                           {showAll ? "Show Slider" : <span className='flex justify-center items-center gap-2'>View All <FaArrowRightLong /> </span> }
                           </button>
                   </div>

                      


                     <div className="btn"><br></br></div>
              
              
       
               <div className="flex gap-[10px] bg-red">
                    <div className="Pre border border-base-500 px-5 py-5  rounded-full">
                      <GrPrevious />

                    </div>


                     <div className="Nex border border-base-500 px-5 py-5  rounded-full">
                       <GrNext />

                    </div>
                   
               </div>


                
             </div>
       
            
             <div className="px-[30px] ">


<div className='flex justify-left items-center gap-3 mb-4'>

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
 

<div className='flex justify-left items-center gap-3 mb-7'>

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
    );
};

export default Trendingstore;