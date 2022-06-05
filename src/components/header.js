import React from 'react';
import LogoContainer from './logoContainer.js';

const Header = () => {
  return (
    <header
      className=' text-gray-100 flex justify-between items-center sm:h-28 md:h-36 p-5 w-full
     bg-primary'>
      <LogoContainer />
      <h1 className='font-mono'>React Movie App</h1>
    </header>
  );
};
export default Header;
