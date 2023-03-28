import { Routes, Route } from 'react-router-dom';

import React from 'react';
import WorkoutPage from '../pages/Workout/workout.page';

const WorkoutRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<WorkoutPage />} />
    </Routes>
  );
};

export default WorkoutRoutes;
