import {hover} from '@testing-library/user-event/dist/hover';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {fetchDetails} from '../store/movieSlice';
const MovieCard = ({movie}) => {
  const dispatch = useDispatch();
  const {details} = useSelector((state) => state.movie.details);
  const navigate = useNavigate();
  const handleOpenMovie = (e) => {
    console.log(e.id);
    navigate('/movie/' + e.id);
    dispatch(fetchDetails(e.id));
  };
  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <div className='grid gap-4 lg:w-[80%] md:w-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {movie.map((mov) => {
        let image = mov.poster_path;
        return (
          <div
            className=' h-96 border-2 rounded-xl overflow-hidden  min-w-[280px]'
            key={mov.id}>
            <div
              data-after={mov.overview}
              className='w-full h-full bg-cover bg-no-repeat  transition-transform relative 
              after:absolute transform hover:scale-110 hover:cursor-pointer after:flex after:flex-col after:p-16 after:items-center after:justify-center  after:text-white'
              style={{
                backgroundImage: `url(
                  https://image.tmdb.org/t/p/w500${image}
                )`,
                after: {
                  content: `${mov.overview}`,
                  display: 'flex',
                  position: 'relative',
                  bottom: '0',
                  left: '0',
                  right: '0',

                  height: '0',
                  width: '100%',
                  opacity: '0',
                  transition: 'all 0.5s ease-in-out',
                  hover: {
                    position: 'absolute',
                    opacity: '0.7',
                    height: '80%',
                    width: '100%',
                  },
                },
              }}
              onClick={(e) => handleOpenMovie(mov)}>
              <h1>{mov.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
