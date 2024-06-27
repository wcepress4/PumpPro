// AuthService.js
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AUTH_BASE_REST_API_URL = "http://localhost:8080";

class AuthService {

  async loginUser(credentials) {
    try {
      const response = await axios.post(`${AUTH_BASE_REST_API_URL}/login`, credentials);
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  } //loginUser

  async registerUser(user) {
    try {
      const response = await axios.post(`${AUTH_BASE_REST_API_URL}/register`, user);
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error registering:', error);
      return false;
    }
  } //registerUser

  logoutUser() {
    localStorage.removeItem('userToken');
  } //logoutUser

  isLoggedIn() {
    return !!localStorage.getItem('userToken');
  } //isLoggedIn

  getCurrentUser() {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    }
    return null;
  } //getCurrentUser

  isAdmin() {
    const currentUserRole = this.getUserRole();
    return currentUserRole === 'ADMIN';
  } //isAdmin

}

export default new AuthService();
