import React from 'react';
import {useSelector} from 'react-redux';
import Loading from '../static/media/loading.svg';

import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../apiConfig';

const Jumbotron = () => {
  const popularState = useSelector((state) => state.movie.popular)[0];
  const {isLoading, error} = useSelector((state) => state.movie);

  return (
    <div className='flex flex-col items-center bg-white  w-full h-full'>
      {isLoading ? (
        <img
          src={Loading}
          alt='loading-spinner'
          className='animate-spin w-24 h-24'
        />
      ) : error ? (
        <div>
          <h1 className='text-3xl font-bold'>Error: {error}</h1>
        </div>
      ) : (
        <div>
          <div
            className='w-[100vw] h-[600px] bg-cover bg-center  lg:h-[700px] '
            style={{
              backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${popularState.backdrop_path})`,
            }}>
            <div className='flex flex-col text-zinc-100 items-start h-full  px-14 sm:justify-center md:justify-end '>
              <p className='flex self-start font-bold md:text-xl'>
                {popularState.title}
              </p>
              <p className='sm:w-[100%] md:w-[40%] mt-10 sm:mb-8 md:mb-48'>
                {popularState.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
