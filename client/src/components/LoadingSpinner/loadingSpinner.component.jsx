import React from 'react';
import { RingLoader } from 'react-spinners';

import { LoadingSpinnerContainer } from './loadingSpinner.styles';

const LoadingSpinner = ({ color, size }) => {
  return (
    <LoadingSpinnerContainer>
      <RingLoader color={color} size={size} />
    </LoadingSpinnerContainer>
  );
};
export default LoadingSpinner;
