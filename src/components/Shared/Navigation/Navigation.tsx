import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import Logo from "../../../Assets/Images/Logos/logo.png";

const Navigation = () => {
  return (
    <>
      <div className="container mx-auto sticky top-0 bg-white">
        <nav className='flex justify-between items-center py-1 px-2'>
        <img src={Logo} alt="OGANI" />
        <ul className='hidden sm:block'>
          <li className='inline-block mx-5'>
            <Link to="/">Home</Link>
          </li>
          <li className='inline-block mx-5'>
            <Link to="/shop">Shop</Link>
          </li>
          <li className='inline-block mx-5'>
            <Link to="/blog">Blog</Link>
          </li>
          <li className='inline-block mx-5'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className='hidden sm:block'>
          <li className='inline-block mx-5'>
            <Link to="#">
              <FaHeart/>
            </Link>
          </li>
          <li className='inline-block mx-5'>
            <Link to="#">
              <BsBagFill/>
            </Link>
          </li>
          <li className='inline-block mx-5'>
            <Link to="#">Item: $150.00</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Navigation;
