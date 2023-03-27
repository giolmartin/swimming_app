import React, { createContext, useState } from 'react';

const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [intensity, setIntensity] = useState('');

  const generateWorkout = () => {
    // Your logic to generate a random workout based on inputs
  };

  return (
    <WorkoutContext.Provider
      value={{
        distance,
        setDistance,
        time,
        setTime,
        intensity,
        setIntensity,
        generateWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext, WorkoutProvider };
