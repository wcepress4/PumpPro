import axios from 'axios';
import AuthService from './AuthService';
import UserService from './UserService';

const EXERCISE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/exercises';

class ExerciseService {
  getAllExercises() {
    return axios.get(EXERCISE_BASE_REST_API_URL);
  }

  createExercise(exercise) {
    return axios.post(EXERCISE_BASE_REST_API_URL, exercise);
  }

  getExerciseById(exerciseId) {
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/${exerciseId}`);
  }

  getExerciseByName(exerciseName) {
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/name/${exerciseName}`);
  }

  updateExercise(exerciseId, exercise) {
    return axios.put(`${EXERCISE_BASE_REST_API_URL}/${exerciseId}`, exercise);
  }

  deleteExercise(exerciseId) {
    return axios.delete(`${EXERCISE_BASE_REST_API_URL}/${exerciseId}`);
  }

  getAllExercisesByCurrentUserAndAdmins(userId) {
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/current-user-and-admins?userId=${userId}`);
  }
}

export default new ExerciseService();