import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {IMAGE_BASE_URL} from '../apiConfig';
import PlaceholderImg from '../static/media/placeholder.png';
const ActorCard = ({actor}) => {
  return (
    <Card
      className='rounded-md min-w-[200px] min-h-[250px] p-1 hover:bg-slate-200'
      key={actor?.id}>
      <CardMedia
        component='img'
        alt={`${actor?.name}'s photo`}
        loading='lazy'
        image={
          !actor.profile_path
            ? ` ${PlaceholderImg}`
            : `${IMAGE_BASE_URL}/w500${actor?.profile_path}`
        }
        title={actor?.name}
        className='rounded-lg mt-1'
      />
      <CardContent>
        <h3>{actor?.name}</h3>
        <p>As {actor?.character}</p>
      </CardContent>
    </Card>
  );
};
export default ActorCard;
