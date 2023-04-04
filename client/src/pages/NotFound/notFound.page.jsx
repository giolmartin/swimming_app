import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage,
  HomeButton,
} from './notFound.styles';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>
        Oops! The page you're looking for doesn't exist.
      </NotFoundMessage>
      <HomeButton onClick={goToHome}>Go to Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
