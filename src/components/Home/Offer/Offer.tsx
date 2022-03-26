import React from 'react';
import OfferBannerOne from "../../../Assets/Images/Home/Offer/offer-1.jpg";
import OfferBannerTwo from "../../../Assets/Images/Home/Offer/offer-2.jpg";

const Offer = () => {
  return (
    <>
      <div className='py-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <div>
            <img className='mx-auto' src={OfferBannerOne} alt="Offer Banner" />
          </div>
          <div>
            <img className='mx-auto' src={OfferBannerTwo} alt="Offer Banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
