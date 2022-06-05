import React, {useState, useRef} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import Arrow from '../static/media/arrow_right.svg';

import {fetchSearch, setSearchQuery} from '../store/movieSlice';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {searchResults, searchQuery} = useSelector(
    (state) => state.movie
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(search));
    dispatch(fetchSearch(search));
    setSearch('');
    navigate('/search');
  };
  useEffect(() => {
    console.log('Search results: ', searchResults);
    console.log('Search Query: ', searchQuery);
  }, [searchResults, searchQuery]);

  return (
    <div className='w-full h-16 flex bg-gradient-to-t from-primary to-black justify-center items-center '>
      <form onSubmit={handleSubmit} className='self-center '>
        <input
          type='text'
          value={search}
          ref={inputRef}
          placeholder='Search for a movie'
          className='h-10 w-96 rounded-md px-3'
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className='w-40 h-10 bg-slate-300 text-center items-center rounded-md px-3'>
          {/* Submit{' '} */}
          <img
            src={Arrow}
            alt='arrow'
            className='w-10 h-10 text-slate-300'
          />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
