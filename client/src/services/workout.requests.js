import axios from 'axios';
const BASE_URL = process.env.API_URL || 'https://localhost:8000/v1';

export const httpsFetchWoirkoutData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/workouts`);
    if (response.status === 200) {
      console.log('Received response:', response.data);
      return response.data;
    } else {
      console.error('Error fetching workouts, status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
};

export const httpsGenerateWorkoutSession = async (options) => {
  try {
    const response = await axios.get(`${BASE_URL}/workouts/generate`, options);
    if (response.status === 200) {
      console.log('Received response:', response.data);
      return response.data;
    } else {
      console.error('Error generating workout, status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error generating workout:', error);
    return [];
  }
};
