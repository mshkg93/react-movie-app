import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Error, Jumbotron, Popular, SearchInput} from '../components';

import {Pagination} from '@mui/material';
import {addPages} from '../store/movieSlice';
import {useLocation} from 'react-router';
const MainContent = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const error = useSelector((state) => state.movie.error);
  const handlePageChange = (event, value) => {
    if (value < page) return;
    setPage(value);
    dispatch(addPages(page));
  };

  return (
    <main>
      {error ? (
        <Error />
      ) : (
        <div className='flex flex-col items-center '>
          <Jumbotron />
          <SearchInput />
          <Popular />
          {pathname === '/' && (
            <Pagination
              count={100}
              page={page}
              onChange={handlePageChange}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default MainContent;
