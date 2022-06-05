import React from 'react';

const MovieCard = ({movie}) => {
  const handleOpenMovie = (e) => {
    console.log(e.id);
  };
  return (
    <div className='grid gap-4 lg:w-[80%] md:w-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {movie.map((mov) => {
        let image = mov.poster_path;
        // console.log(mov);
        return (
          <div
            className=' h-96 border-2 rounded-xl overflow-hidden  min-w-[280px]'
            key={mov.id}>
            <div
              data-after={mov.overview}
              className='min-w-[80%] h-full bg-cover bg-no-repeat  transition-transform relative hover:after:absolute duration-200 ease-in-out transform hover:scale-110 hover:cursor-pointer after:flex after:flex-col 
                after:bottom-0 after:left-0 after:right-0 after:bg-black after:h-0 after:w-0 hover:after:w-[100%] after:hover:h-[85%] after:content-[` `]  after:hover:opacity-[45%] after:hover:transition-all'
              style={{
                backgroundImage: `url(
                  https://image.tmdb.org/t/p/w500${image}
                )`,

                after: {
                  content: `${mov.overview}`,
                  display: 'inline-block',
                  position: 'relative',

                  // position: 'absolute',
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
