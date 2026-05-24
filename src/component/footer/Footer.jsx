import React from "react";
import foot from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <div className="w-11/12 m-auto pt-[50px] pb-[10px]">

     <div className="block lg:flex gap-[100px]">

       <div>
          <img src={foot} className="mb-5" alt="Footer Logo" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-[50px] md:grid-cols-4 lg:grid-cols-6 lg:gap-[120px] ">
      
        <ul>
          <li className="font-semibold">About</li>
          <li className="mt-2">About us</li>
          <li className="mt-2">Our Branches</li>
          <li className="mb-6">Changelog</li>
        </ul>

       
        <ul>
          <li className="font-semibold">Quick Links</li>
          <li className="mt-2">FAQs</li>
          <li className="mt-2">Recipes</li>
        </ul>

     
        <ul>
          <li className="font-semibold">Help & Support</li>
          <li className="mt-2">Terms of Privacy</li>
          <li className="mt-2">Privacy Policy</li>
          <li className="mb-7">Security</li>
        </ul>

       
        <ul>
          <li className="font-semibold">Company</li>
          <li className="mt-2">Blog</li>
          <li className="mt-2">Contact</li>
        </ul>

      
        <ul>
          <li className="font-semibold">Social</li>
          <li className="mt-2">Facebook</li>
          <li className="mt-2">Instagram</li>
        </ul>

      </div>


     </div>

     

      <p className="text-center mt-9 mb-7 text-sm">
        All rights reserved. © 2024 EmaStudio
      </p>

    </div>
  );
};

export default Footer;