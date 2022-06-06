import React from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';
const Popular = () => {
  const popular = useSelector((state) => state.movie.popular);

  return (
    <div className='flex justify-center w-[95%] mt-10'>
      <MovieCard movie={popular} />
    </div>
  );
};

export default Popular;
