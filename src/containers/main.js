import React from 'react';
import {useSelector} from 'react-redux';
import {Error, Jumbotron, Popular, SearchInput} from '../components';
const MainContent = () => {
  const error = useSelector((state) => state.movie.error);
  return (
    <main>
      {error ? (
        <Error />
      ) : (
        <div className='flex flex-col items-center '>
          <Jumbotron />
          <SearchInput />
          <Popular />
        </div>
      )}
    </main>
  );
};

export default MainContent;
