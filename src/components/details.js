import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useNavigate} from 'react-router';

import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../apiConfig';
import {fetchDetails} from '../store/movieSlice';

import PaidIcon from '@mui/icons-material/Paid';
import PollIcon from '@mui/icons-material/Poll';
import TimerIcon from '@mui/icons-material/Timer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LinkIcon from '@mui/icons-material/Link';
import Loading from '../static/media/loading.svg';

import Reviews from './reviews';
import ActorsContainer from './actorsContainer';
const Details = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.movie.details);
  const {isLoading} = useSelector((state) => state.movie);
  const reviews = useSelector(
    (state) => state.movie.details.reviews?.results
  );
  const localed = (cash) => {
    return cash.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    if (state.length === 0) {
      dispatch(fetchDetails(id));
    }
  }, [state, id]);
  return isLoading ? (
    <img
      src={Loading}
      alt='loading-spinner'
      className='animate-spin w-24 h-24 mx-auto mt-10'
    />
  ) : (
    <section className='w-full bg-primary'>
      <div className='w-full container mx-auto relative '>
        <div
          className='flex flex-col items-center justify-center bg-center w-full h-[720px] bg-primary bg-no-repeat'
          style={{
            backgroundImage: state.backdrop_path
              ? `url(
          ${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.backdrop_path}
        )`
              : `url('../static/media/placeholder.png')`,
          }}></div>
        <div className=' bg-primary text-tertiary rounded-lg w-full min-h-12 px-10 pt-3 bottom-0 grid items-center justify-between lg:grid-cols-4 sm:grid-cols-2 -translate-y-3 '>
          <h3 className='flex gap-2 justify-center'>
            <ThumbUpIcon />{' '}
            {state.vote_count ? state.vote_count : 'No data'}
          </h3>
          <h3 className='flex gap-2 justify-center'>
            <PollIcon />{' '}
            {state.vote_average ? state.vote_average : 'No data'}
          </h3>
          <h3 className='flex gap-2 justify-center'>
            <PaidIcon />
            {state.revenue ? localed(state.revenue) : 'Unknown'}
          </h3>
          <h3 className='flex gap-2 justify-center'>
            <TimerIcon /> {state.runtime ? state.runtime : null}min
          </h3>
        </div>
      </div>
      <div className=' mx-auto w-full max-h-min py-8 px-8 bg-black bg-opacity-[70%] rounded-xl'>
        <div className='flex flex-col lg:flex-row min-w-[600px] gap-5 '>
          <img
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${state.poster_path}`}
            alt='Movie poster'
            className='rounded-xl min-h-[300px] min-w-[200px] grid-col-1 max-w-xs '
          />
          <div className='flex flex-col min-w-[300px]'>
            <h1 className='text-white text-lg font-bold place-self-start'>
              {state.title}
            </h1>
            <p className='self-start text-white mb-4'>
              {state.release_date
                ? `Release date: ${state.release_date}`
                : null}
            </p>
            <p className='flex  text-white text-md self-start  '>
              {state.overview}
            </p>
            {state.homepage && (
              <button className='rounded-md bg-primary hover:opacity-60 p-1 max-w-min text-sm text-gray-100 '>
                <a href={`${state.homepage}`} target='blank'>
                  <LinkIcon /> Homepage
                </a>
              </button>
            )}
          </div>
        </div>

        <ActorsContainer />
        {reviews?.length > 0 ? (
          <Reviews reviews={reviews} className='flex flex-row' />
        ) : null}
        <button
          onClick={() => navigate(-1)}
          className='rounded-md bg-slate-100 px-4 py-2 outline-none hover:bg-slate-200 mt-3'>
          Back
        </button>
      </div>
    </section>
  );
};
export default Details;
