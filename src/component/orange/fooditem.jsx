import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import frame19 from '../../assets/fame19.png'
import frame20 from '../../assets/frome20.png'
import frame21 from '../../assets/frame21.png'
import frame22 from '../../assets/frame22.png'



const fooditem = () => {

    const [showAll, setShowAll] = useState(false);


      const products = [
        { id: 1, img: frame19, name: "Apple", currency: "$2.71/lb", price: 99.99, have: 12, sold:12 },
        { id: 2, img: frame20, name: "Orange", currency: "$3.20/lb", price: 99.99, have: 12, sold:12 },
        { id: 3, img: frame21, name: "Banana", currency: "$1.50/lb", price: 99.99, have: 12, sold:12 },
        { id: 4, img: frame22, name: "Mango", currency: "$4.00/lb", price: 99.99, have: 12, sold:12 },
        { id: 5, img: frame19, name: "Grapes", currency: "$5.10/lb", price: 99.99, have: 12, sold:12 },
        { id: 6, img: frame20, name: "Pineapple", currency: "$6.00/lb", price: 99.99, have: 12, sold:12 },
        { id: 7, img: frame21, name: "Orange", currency: "$3.20/lb", price: 99.99, have: 12, sold:12 },
        { id: 7, img: frame22, name: "Orange", currency: "$3.20/lb", price: 99.99, have: 12, sold:12 },
    
      ];


    return (
          <div>
        
             
              <div className="flex w-full items-center justify-between mt-6 mb-[30px]">
                <h2 className="font-bold text-xl w-full">Cheese</h2>
        
                  
               <div> </div>
        
                <div className="hidden md:flex gap-[10px]">
                    <div className="Prev border border-base-500 px-3 py-3  rounded-full">
                    <GrPrevious />

                    </div>


                    <div className="Next border border-base-500 px-3 py-3  rounded-full">
                        <GrNext />

                    </div>
                                 
                             </div>
               
              </div>
        
             
              <div className="flex w-full">
        
                {showAll ? (
                 
                  <div>
        
                    {products.map((item) => (
                      <div key={item.id} className="flex gap-4 items-center border p-3 rounded-xl">
        
                        <img
                          className="w-[120px] h-[100px] sm:w-[200px] rounded-lg bg-gray-200"
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
                        nextEl: ".Next",
                        prevEl: ".Prev",
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
        
                          <p>{item.name}</p>
                           <p className="font-semibold">{item.name}</p>
                          <p className="font-semibold">{item.currency}</p>
                          <p className="text-gray-500">{item.price}</p>
                          <div className="flex flex-col-2 gap-4">
                          <p className="text-gray-500">{item.have} have</p>
                          <p className="text-gray-500">{item.sold} left</p>
        
                          </div>
                         
                        </div>
        
                      </SwiperSlide>
                    ))}
        
                  </Swiper>
                )}
        
              </div>
            </div>
    );
};

export default fooditem;