import React from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';
const SearchResults = () => {
  const {searchResults} = useSelector((state) => state.movie);
  return (
    <div className='flex justify-center w-[95%] mt-10'>
      <MovieCard movie={searchResults} />
    </div>
  );
};
export default SearchResults;
