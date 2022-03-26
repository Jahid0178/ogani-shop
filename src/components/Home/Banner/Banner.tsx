import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className='grid grid-cols-5 gap-5 py-3'>
        <div>
          <div className='bg-lime-600 px-3 py-4 text-center cursor-pointer'>
            <h4 className='text-white font-bold'> <GiHamburgerMenu className='inline-block mr-2' /> All departments</h4>
          </div>
        </div>
        <div className='col-span-4'>
          <div>
            {/* Search Box Section */}
            <div className='flex justify-between items-center'>
              <div className='border pl-3'>
                <form action="#">
                  <div className='input-primary'>
                    <span className='inline-block mr-5'>All Categories</span>
                    <input className='py-2.5 px-5 outline-none' placeholder='What Do You Need?' type="text" name="" id="" />
                    <button className='btn-primary' type='submit'>Search</button>
                  </div>
                </form>
              </div>
              {/* Phone Number Section */}
              <div className='flex items-center'>
                <div className='mr-4'>
                  <BsFillTelephoneFill className='text-2xl' />
                </div>
                <div>
                  <h5 className='font-bold'>+65 11.188.888</h5>
                  <span className='text-xs text-gray-500'>support 24/7 time</span>
                </div>
              </div>
            </div>
            {/* Banner Section */}
            <div className="banner-section mt-4 px-3 py-5 flex items-center">
              <div>
                <span className='text-lime-600'>Fruit Fresh</span>
                <h2 className='py-2 text-6xl'>Vegetable <br/> 100% Organic</h2>
                <p className='mt-3'>Free Pickup and Delivery Available</p>
                <button className="btn-primary mt-7">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
