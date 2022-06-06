import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Pagination} from '@mui/material';
import MovieCard from './movieCard';
import {addSearchPages} from '../store/movieSlice';
const SearchResults = () => {
  const [page, setPage] = useState(1);
  const {searchResults} = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const handleAddPages = (event, value) => {
    setPage(value);
    dispatch(addSearchPages(value));
  };

  return (
    <div className='flex flex-col justify-center w-[95%] mt-10'>
      <MovieCard movie={searchResults} />
      <Pagination
        page={page}
        count={10}
        onChange={handleAddPages}
        className='self-center'
      />
    </div>
  );
};
export default SearchResults;
