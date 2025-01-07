import axios from 'axios';
import AuthService from './AuthService';
import UserService from './UserService';

const WORKOUT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/workouts';

class WorkoutService {
  getAllWorkouts() {
    return axios.get(WORKOUT_BASE_REST_API_URL);
  }

  createWorkout(workout) {
    return axios.post(WORKOUT_BASE_REST_API_URL, workout);
  }

  getWorkoutById(workoutId) {
    return axios.get(`${WORKOUT_BASE_REST_API_URL}/${workoutId}`);
  }

  updateWorkout(workoutId, workout) {
    return axios.put(`${WORKOUT_BASE_REST_API_URL}/${workoutId}`, workout);
  }

  deleteWorkout(workoutId) {
    return axios.delete(`${WORKOUT_BASE_REST_API_URL}/${workoutId}`);
  }
}

export default new WorkoutService();
