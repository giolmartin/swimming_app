import React, { useContext } from 'react';
import { WorkoutContext } from '../../context/workout.context';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Select,
  GenerateButton,
} from './workout.styles';

const WorkoutPage = () => {
  const {
    distance,
    setDistance,
    time,
    setTime,
    intensity,
    setIntensity,
    generateWorkout,
  } = useContext(WorkoutContext);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };

  const handleGenerateWorkout = () => {
    generateWorkout();
  };

  return (
    <Container>
      <Title>Workout Generator</Title>
      <Form>
        <Label htmlFor='distance'>Distance (meters):</Label>
        <Input
          type='number'
          id='distance'
          value={distance}
          onChange={handleDistanceChange}
        />

        <Label htmlFor='time'>Time (minutes):</Label>
        <Input
          type='number'
          id='time'
          value={time}
          onChange={handleTimeChange}
        />

        <Label htmlFor='intensity'>Intensity:</Label>
        <Select
          id='intensity'
          value={intensity}
          onChange={handleIntensityChange}
        >
          <option value=''>Select intensity</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </Select>

        <GenerateButton onClick={handleGenerateWorkout}>
          Generate Workout
        </GenerateButton>
      </Form>
    </Container>
  );
};

export default WorkoutPage;
