import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {fetchDetails} from '../store/movieSlice';

const MovieCard = ({movie}) => {
  const {searchQuery} = useSelector((state) => state.movie);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenMovie = (e) => {
    navigate('/movie/' + e.id);
    dispatch(fetchDetails(e.id));
  };

  useEffect(() => {
    if (searchQuery.length === 0) navigate('/');
  }, [searchQuery]);

  return (
    <div className='grid gap-4 lg:w-full md:w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 '>
      {movie.map((mov) => {
        let image = mov.poster_path;
        return (
          <div
            className=' h-96 border-2 rounded-xl overflow-hidden  min-w-[280px]'
            key={mov.id}>
            <div
              data-after={mov.overview}
              className='w-full h-full bg-cover bg-no-repeat relative 
              after:absolute transition-transform hover:scale-105 hover:cursor-pointer '
              style={{
                backgroundImage: `url(
                  https://image.tmdb.org/t/p/w500${image}
                )`,
              }}
              onClick={(e) => handleOpenMovie(mov)}>
              <div
                className='absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-white'
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <h3 className='text-xl font-bold'>{mov.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;

/*  after: {
                  content: `${mov.overview}`,
                  color: '#fff',
                  display: 'flex',
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: `${openDescription ? 'auto' : '0'}`,
                  width: '100%',
                  opacity: '0',
                  transition: 'all 0.5s ease-in-out',
                  hover: {
                    position: 'absolute',
                    opacity: '0.7',
                    height: '80%',
                    width: '100%',
                  },
                },*/
