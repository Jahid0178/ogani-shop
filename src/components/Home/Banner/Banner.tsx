import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='grid grid-cols-5 gap-5 py-3'>
        <div>
          <div className='bg-lime-600 px-3 py-4 text-center'>
            <h4 className='text-white font-bold'>All departments</h4>
          </div>
        </div>
        <div className='bg-red-300 col-span-4'>
          <div>Content</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
