import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header, Error, Details, SearchResults} from './components';
import {Main} from './containers';

import './App.css';
import Loading from './static/media/loading.svg';
import {fetchPopular} from './store/movieSlice';

function App() {
  const dispatch = useDispatch();
  const {
    searchResults: results,
    isLoading,
    error,
  } = useSelector((state) => state.movie.searchResults);
  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  return (
    <BrowserRouter>
      <div className='App container-xl mx-auto'>
        <Header />
        <Routes>
          <Route path='*' element={<Main />} />
          <Route
            path='/search'
            element={
              isLoading ? (
                <img
                  src={Loading}
                  alt='loading-spinner'
                  className='animate-spin w-24 h-24'
                />
              ) : error ? (
                <Error />
              ) : (
                <SearchResults results={results} />
              )
            }
          />
          <Route
            path='/movie/:id'
            element={
              isLoading ? (
                <img
                  src={Loading}
                  alt='loading-spinner'
                  className='animate-spin w-24 h-24'
                />
              ) : error ? (
                <Error />
              ) : (
                <Details />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
