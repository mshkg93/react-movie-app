import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../static/media/blue_square.svg';

const LogoContainer = () => {
  return (
    <div className='flex py-4 flex-row md:flex-col'>
      <Link to='/'>
        <p className='text-xs md:text-lg -rotate-90 md:rotate-0 align-bottom'>
          Powered by
        </p>
        <img
          src={logo}
          alt='The MovieDB logo'
          className='sm:w-20 sm:h-20 md:w-28 md:h-28 '
        />
      </Link>
    </div>
  );
};
export default LogoContainer;
