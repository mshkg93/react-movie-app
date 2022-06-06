import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../static/media/blue_square.svg';

const LogoContainer = () => {
  return (
    <Link to='/'>
      <div className='flex py-4 sm:flex-row md:flex-col mx-4 sm:mx-0'>
        <p className='text-xs md:text-lg -rotate-90 md:rotate-0 align-bottom sm:max-h-min '>
          Powered by
        </p>
        <img
          src={logo}
          alt='The MovieDB logo'
          className='sm:w-20 sm:h-20 md:w-28 md:h-28 '
        />
      </div>
    </Link>
  );
};
export default LogoContainer;
