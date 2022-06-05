import React from 'react';
import {useSelector} from 'react-redux';
const Error = () => {
  const error = useSelector((state) => state.movie.error);

  return (
    <div>
      <h1>{error}</h1>
    </div>
  );
};
export default Error;
