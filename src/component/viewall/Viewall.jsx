// import React from 'react';
// import food1 from '../../assets/food1.jpg'
// import food2 from '../../assets/food2.jpg'
// import food3 from '../../assets/food3.jpg'
// import food4 from '../../assets/food4.jpg'
// import food5 from '../../assets/food5.jpg'
// import food6 from '../../assets/food6.jpg'
// import image1 from '../../assets/image1.png'
// import image3 from '../../assets/image3.png'
// import image4 from '../../assets/image4.png'
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";



// const Viewall = () => {
//     return (
//         <div className='mt-[120px]'>
//             <div className='flex w-full  item-center justify-between px-[70px] m-auto mb-[30px]'>
//                          <h2 className='font-bold'>Best Seller</h2>
//                          <button className='font-semibold'>View all(40+ef)</button>
//             </div>

//             <div className='w-full px-[70px] m-auto'>

//                 {/* <img className='w-[200px] h-[200px]' src={food1} alt="Food 1" /> */}


//                  <Swiper slidesPerView={5} spaceBetween={15}>
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl  bg-gray-200 mb-[15px]' src={image1} />
//         <div>
//             <p>This is apple</p>
//             <p className='mt-[10px]'>$2.71/lb</p>
//             <h2 className='font-bold'>$99.99 <span className='text-[10px] font-normal'>$99.99</span></h2>

//             <p className='text-red-500'>12 Left <span className='text-black'>12 Left</span></p>

//              </div>
//       </SwiperSlide>

     
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl bg-gray-200' src={image3} />
        
//       </SwiperSlide>

     
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl' src={image1} />
        
//       </SwiperSlide>

     
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl bg-gray-200' src={image3} />
        
//       </SwiperSlide>

     
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl' src={image1} />
        
//       </SwiperSlide>

     
//       <SwiperSlide>
//         <img className='w-[260px] h-[200px] rounded-xl bg-gray-200' src={image3} />
        
//       </SwiperSlide>

//     </Swiper>
              

//             </div>
           
//         </div>
//     );
// };

// export default Viewall;





import React, { useState } from "react";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";


const Viewall = () => {
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
    <div className="mt-[120px]">

      {/* Header */}
      <div className="flex w-full items-center justify-between px-[70px] mb-[30px]">
        <h2 className="font-bold text-xl w-full">Best Seller</h2>

            <div className="w-full flex justify-end mr-5">

            <button
                    onClick={() => setShowAll(!showAll)}
                    className="font-semibold text-blue-500 border rounded-full flex items-center justify-center border-[#6C2358] px-5 py-1"
                    >
                    {showAll ? <span className="flex justify-center items-center gap-2 text-black font-semibold text-[14px]">Show Slider</span>  : <span className="flex justify-center items-center gap-2 text-black font-semibold text-[14px]">View All(+ 40) <FaArrowRightLong /></span>}
                    </button>
            </div>
       <div> </div>

        <div className="hidden md:flex gap-[10px]">
                          <div className="Prev border border-base-500 px-5 py-5  rounded-full">
                            <GrPrevious />
      
                          </div>
      
      
                           <div className="Next border border-base-500 px-5 py-5  rounded-full">
                             <GrNext />
      
                          </div>
                         
                     </div>
       
      </div>

     
      <div className="w-full px-[70px]">

        {showAll ? (
         
          <div className="grid grid-cols-4 md: grid grid-cols-2 sm: grid grid-cols-1 gap-5">

            {products.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border p-3 rounded-xl">

                <img
                  className="w-[120px] h-[100px] rounded-lg bg-gray-200"
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
          // 🔽 Slider View
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

export default Viewall;