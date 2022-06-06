import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ActorCard from './actorCard';
const ActorsContainer = () => {
  const [actorsCount, setActorsCount] = useState(10);
  const wholeState = useSelector(
    (state) => state.movie.details.credits?.cast
  );
  const handleMoreActors = () => {
    setActorsCount(actorsCount + 10);
  };
  return (
    <div
      className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-5 mt-5 '
      style={{}}>
      {wholeState.slice(0, actorsCount).map((item) => {
        return (
          <ActorCard
            actor={item}
            setActorsCount={setActorsCount}
            className='bg-slate-100 hover:bg-slate-300'
            key={item?.id}
          />
        );
      })}
      <button
        onClick={handleMoreActors}
        className='text-slate-100 hover:opacity-50'>
        Load more actors
      </button>
    </div>
  );
};

export default ActorsContainer;
