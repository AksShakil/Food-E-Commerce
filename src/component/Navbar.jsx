
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoLocationOutline } from "react-icons/io5";
import { BsCartDash } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>

    <header className="bg-base-500 px-4 md:px-[57px] py-3 relative">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-3">

      <button
        onClick={() => setShowSidebar(true)}
        className="md:hidden text-xl"
      >
        ☰
      </button>

      <img src={logo} alt="Logo" className="hidden md:block" />

      <p className='flex items-center text-black text-[14px] sm:ml-[100px]'>
        <IoLocationOutline /> 10115 New York
      </p>

    </div>

    <div className="hidden md:flex w-1/3  text-pink-500 text-sm items-center px-3 border rounded-full">
      <CiSearch />
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 focus:outline-none"
      />
    </div>

    <div className='flex items-center gap-3'>

      <button className='flex items-center gap-1 bg-pink-50 px-2 py-2 rounded-3xl text-xs md:text-base'>
      <div className='flex items-center justify-center bg-red-100 border rounded-3xl px-2'><BsCartDash />14</div>    Cart
      </button>

      <button
        onClick={() => setShowLogin(!showLogin)}
        className="border border-pink-500 px-4 py-2 flex items-center gap-1 rounded-3xl text-xs md:text-base"
      >
     <IoIosPersonAdd />   Login
      </button>

    </div>
  </div>

  <div className="mt-3 md:hidden flex items-center px-3 border rounded-full">
    <CiSearch />
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-2 py-2 focus:outline-none"
    /> 
  </div>


 {showLogin && (
            <div className="absolute right-[50px] mt-[30px] w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <input              
                type="text"
                placeholder="Username"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Submit
              </button>
            </div>
          )}




</header>

      {showSidebar && (
        <>
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black opacity-30 z-40"
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 p-4">

            <button
              onClick={() => setShowSidebar(false)}
              className="mb-4"
            >
              ❌ Close
            </button>

             <button className="z-50 absolute top-0 left-0"
              onClick={() => setShowLogin(!showLogin)}
              className="border border-pink-500 px-4 py-2 flex items-center gap-1 rounded-3xl text-xs md:text-base"
            >
          <IoIosPersonAdd />   Login
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default Navbar;












































// import React from 'react';
// import logo from '../assets/logo.png';
// import { useState } from 'react';
// import { IoLocation, IoLocationOutline } from "react-icons/io5";
// import { BsCartDash } from "react-icons/bs";
// import { CiSearch } from "react-icons/ci";
// import { IoIosPersonAdd } from "react-icons/io";





// const Navbar = () => {

//      const [showLogin, setShowLogin] = useState(false);
//     return (
//         <div>
//              <header className="bg-base-500 px-[57px] py-3 flex items-center justify-between relative ">
        
      
//         <div className="font-bold text-blue-600 flex items-center justify-between">
//          <img src={logo} alt="Logo" />

//               <p className='flex items-center text-black font-normal text-[14px] ml-[50px] md:ml-[20px]'><IoLocationOutline></IoLocationOutline>10115 New York</p>
//         </div>

   
        
        

      
//         <div className="w-1/3 text-pink-500 text-sm flex justify-between items-center px-3 border rounded-[200px]">
//         <div className='bg-pink-50 px-1 py-1 border rounded-full'>
//                   <CiSearch />
//         </div>
//          <input 
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-4 focus:outline-none"           
//           />

//         </div>

      

//         <div className='flex items-center justify-center gap-5'>

//                       <button className='  flex justify-center items-center ml-[-50px] gap-2
                      
//                       relative bg-pink-50  px-2 py-1 text-xs 
//                         sm:px-4 sm:py-2 sm:text-sm
//                         md:px-2 md:py-1 md:text-base
//                         lg:px-5 lg:py-1 lg:text-md
//                         font-medium rounded-2xl
//                          transition"
                      
//                       '><BsCartDash />  Cart</button>

          

//           <button
//             onClick={() => setShowLogin(!showLogin)}
//             className=" relative border-[1px] border-pink-500  px-2 py-1 text-xs flex items-center justify-between gap-2
//                         sm:px-4 sm:py-2 sm:text-sm
//                         md:px-2 md:py-1 md:text-base
//                         lg:px-5 lg:py-1 lg:text-md
//                         font-medium rounded-2xl
//                          transition"
//           >
//             <IoIosPersonAdd />

//              Login
//           </button>

//         </div>
        

        
//           {showLogin && (
//             <div className="absolute right-0 mt-[300px] w-64 bg-white shadow-lg rounded-lg p-4 z-50">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                 Submit
//               </button>
//             </div>
//           )}
       
//       </header>
//         </div>
//     );
// };

// export default Navbar;



