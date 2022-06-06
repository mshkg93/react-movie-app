import React, {useState} from 'react';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../apiConfig';

import {Modal} from '@mui/material';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import NoImage from '../static/media/no_img.svg';

const Review = ({id, author_details, content, author}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const shortContent = (con) => {
    if (con?.length > 100) {
      return con.slice(0, 100) + '...';
    }
  };
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div
      className='bg-tertiary text-slate-100 mb-4 overflow-hidden rounded-md '
      key={id}>
      <div className='flex flex-col'>
        <button onClick={handleOpen} className={'h-10'}>
          {isOpen ? 'Close review' : 'Show review'}
        </button>
      </div>
      <aside style={{height: isOpen ? '100%' : 0}} className='flex'>
        <img
          className='w-10 h-10 rounded-full'
          loading='lazy'
          src={
            author_details?.avatar_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${author_details.avatar_path}`
              : `${NoImage}`
          }
          alt={`${author_details.username}'s avatar`}
        />
        <p className='place-self-start'>{author_details.rating}/10</p>
        <h3 className='place-self-start'>Author: {author}</h3>
        <p className='place-self-start' onClick={handleOpenModal}>
          {shortContent(content)}
        </p>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              maxWidth: '500px',
              minHeight: '300px',
              margin: 'auto',
              transform: 'translateY(20%)',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '10px',
            }}>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'>
              {
                <img
                  src={`${author_details?.avatar_path}`}
                  alt={`${author.username}'s avatar`}
                  className='rounded-full'
                />
              }
              Author: {author}
            </Typography>
            <Typography id='modal-modal-description' sx={{mt: 2}}>
              <p>Rating: {author_details.rating}</p>
              <p>{content}</p>
            </Typography>
          </Box>
        </Modal>
      </aside>
    </div>
  );
};
export default Review;
