import axios from 'axios';
import AuthService from './AuthService';
import UserService from './UserService';

const EXERCISE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/exercises';

class ExerciseService {

  buildQueryParams(params) {
    const queryParams = [];

    // Only add the parameter to the query string if it's not 'any' or null
    if (params.bodyPart && params.bodyPart !== 'any') {
      queryParams.push(`bodyPart=${params.bodyPart}`);
    }

    if (params.category && params.category !== 'any') {
      queryParams.push(`category=${params.category}`);
    }

    // Return the query string, joining by '&' if there are multiple parameters
    return queryParams.length ? `&${queryParams.join('&')}` : '';
  }

  getAllExercises(userId, bodyPart, category) {
    const queryParams = this.buildQueryParams({ userId, bodyPart, category });
    console.log(queryParams);
    return axios.get(`${EXERCISE_BASE_REST_API_URL}?userId=${userId}${queryParams}`);
  }

  getAllExercisesPublic(bodyPart, category) {
    const queryParams = this.buildQueryParams({ bodyPart, category });
    console.log(queryParams);
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/default${queryParams}`);
  }

  getAllExercisesPrivate(userId, bodyPart, category) {
    const queryParams = this.buildQueryParams({ userId, bodyPart, category });
    console.log(queryParams);
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/personal?userId=${userId}${queryParams}`);
  }

  getAllExercisesAdmin(bodyPart, category) {
    const queryParams = this.buildQueryParams({ bodyPart, category });
    console.log(queryParams);
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/admin?${queryParams}`);
  }

  createExercise(exercise) {
    console.log(exercise);
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

  getAdminStatusByExerciseCreator(exerciseId) {
    return axios.get(`${EXERCISE_BASE_REST_API_URL}/${exerciseId}/admin-status`);
  }
}

export default new ExerciseService();