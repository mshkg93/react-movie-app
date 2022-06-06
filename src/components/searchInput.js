import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Arrow from '../static/media/arrow_right.svg';
import {fetchSearch, setSearchQuery} from '../store/movieSlice';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '') return;
    dispatch(setSearchQuery(search));
    dispatch(fetchSearch(search));
    setSearch('');
    navigate('/search');
  };

  return (
    <div className='w-full h-24 flex  bg-gradient-to-t from-primary to-black items-center justify-center'>
      <form onSubmit={handleSubmit} className='self-center flex'>
        <input
          type='text'
          value={search}
          ref={inputRef}
          placeholder='Search for a movie'
          className='h-10 w-96 rounded-md px-3 bg-gray-200 focus:outline-none focus:bg-gray-300
          z-10
          '
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className='w-20 h-10 bg-slate-400 items-center rounded-md -translate-x-2'>
          <img
            src={Arrow}
            alt='arrow'
            className='w-10 h-8 text-slate-300 inline-block'
          />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
