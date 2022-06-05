import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useNavigate} from 'react-router';

const Details = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div>
      <h1>Details</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
export default Details;
