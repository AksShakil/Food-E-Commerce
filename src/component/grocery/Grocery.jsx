import React from 'react';
import img1 from '../../assets/image1.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import { NavLink } from 'react-router-dom';


const Grocery = () => {
console.log("render grocery");

    const product = [

        {id: 1, img: img1, name: 'Strawbery', price: '99$', currency: '99$', stock: 12, sell: 12},
        {id: 3, img: img3, name: 'Orange', price: '99$', currency: '99$', stock: 12, sell: 12},
        {id: 4, img: img4, name: 'Orange', price: '99$', currency: '99$', stock: 12, sell: 12}

    ]



    return (
    <div className='w-10/12 mx-auto mt-[100px]'>


          <div className='hidden sm:flex gap-6 block'>


  
        <div className=" mt-[100px]">

<NavLink to='/clickorange'>

         <div className="flex flex-wrap gap-5">

                {product.map((item) => (
                    <div key={item.id} className='w-full sm:w-auto'>
                        <img src={item.img} alt="" />

                        <div>
                            <h2 className='mt-7 mb-3'>This is a product</h2>
                            <p>{item.name}</p>
                            <p>{item.have}</p>

                            <div className='flex gap-4'>
                                <p>{item.price}</p>
                                <p>{item.currency}</p>
                            </div>

                            <p>{item.sell} sell</p>
                            <p>{item.stock} left</p>
                        </div>
                    </div>
                ))}

            </div>

</NavLink>
           

        </div>

     
        <div className="order-1 sm:order-2 mt-[80px] ml-[50px]">

            <p className='text-[14px] text-purple-400 font-semibold'>
                Get 10% OFF On Your First Order
            </p>

            <h2 className='text-2xl font-semibold mb-[30px]'>
                Order Now Your Grocery!
            </h2>

            <div className='flex flex-wrap gap-4'>

                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Beef</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Rice</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
               

            </div>    
            <div className='flex flex-wrap gap-4 mt-5 mb-5'>

                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
                
               

            </div>    
            <div className='flex flex-wrap gap-4'>

                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
              
                
               

            </div>    

        </div>

    </div>






    <div className='sm:hidden grid grid-cols-1 sm:grid-cols-2 gap-6'>

  
        <div className="order-2 sm:order-1 mt-[40px]">

            <div className="flex  gap-5">

                {product.map((item) => (
                    <div key={item.id} className='w-full sm:w-auto'>
                        <img src={item.img} alt="" />

                        <div>
                            <h2 className='mt-7 mb-3'>This is a product</h2>
                            <p>{item.name}</p>
                            <p>{item.have}</p>

                            <div className='flex gap-4'>
                                <p>{item.price}</p>
                                <p>{item.currency}</p>
                            </div>

                            <p>{item.sell} sell</p>
                            <p>{item.stock} left</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>

     
        <div className="order-1 sm:order-2 mt-[80px] ml-[50px]">

            <p className='text-[14px] text-purple-400 font-semibold'>
                Get 10% OFF On Your First Order
            </p>

            <h2 className='text-2xl font-semibold mb-[30px]'>
                Order Now Your Grocery!
            </h2>

            <div className='flex flex-wrap gap-4'>

                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Beef</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Rice</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Fish Bakery</p></NavLink>
                <NavLink><p className='bg-base-200 px-3 py-2 border rounded-3xl text-[14px] font-semibold'>Meat</p></NavLink>

            </div>    

        </div>

    </div>

</div>
    );
};

export default Grocery;