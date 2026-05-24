import React from 'react';
import bread from "../../assets/bread.png";
import cake from '../../assets/cake.png'
import cheese from '../../assets/cheese.png'
import snacks from '../../assets/snacks.png'
import watter from '../../assets/watermalon.png'
import fruit from '../../assets/fruit.png'
import yogart from '../../assets/yogart.png'
import alco from '../../assets/alco.png'
import candy from '../../assets/candy.png'
import veg from '../../assets/vegetable.png'

import { NavLink } from 'react-router-dom';

const scrolling = () => {
    return (
        <div>
               <div className="overflow-hidden  w-full m-auto bg-white  mt-[30px] px-3">
        <div className="flex w-max animate-left gap-4">
          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={bread} />
            
            <NavLink to='/orange'>Bread </NavLink>
          </div>

          
          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={cake} />
            <p>Cake</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={cheese} />
            <p>Cheese</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border
           rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={watter} />
            <p>Watermelon</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={fruit} />
            <p>Fruit</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300  bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={snacks} />
            <p>Snacks</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300  bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={candy} />
            <p>Candy</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={veg} />
            <p>Veg</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={yogart} />
            <p>Yogart</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={alco} />
            <p>Alco</p>
          </div>

       
          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={bread} />
            <p>Bread</p>
          </div>

          
          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={cake} />
            <p>Cake</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={cheese} />
            <p>Cheese</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={watter} />
            <NavLink to='/orange'>Watermelon</NavLink>
            
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={fruit} />
            <p>Fruit</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={snacks} />
            <p>Snacks</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full  hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={candy} />
            <p>Candy</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={veg} />
            <p>Veg</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={yogart} />
            <p>Yogart</p>
          </div>

          <div className="flex items-center justify-center gap-1 px-2 py-2 border rounded-full hover:border-[#B6349A] transition-all duration-300 bg-[#F8F7F8]">
            <img className="w-4 h-4  rounded-lg" src={alco} />
            <p>Alco</p>
          </div>

       

        </div>



        
      </div>

        </div>
    );
};

export default scrolling;