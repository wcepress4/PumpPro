// AuthService.js
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import UserService from './UserService';

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

  getUserRole() {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.role : null; // Assuming role is stored in JWT payload
  } //getUserRole

  getUserLogin() {
    const currentUser = this.getCurrentUser();
    console.log('User login:', currentUser.sub);
    return currentUser ? currentUser.sub : null; // Assuming 'sub' holds the username
  }

  async getUserId() {
    const userLogin = this.getUserLogin();
    try {
      const userIdResponse = await UserService.getUserIdByLogin(userLogin);
      console.log('User ID:', userIdResponse.data); // Log user ID to verify it's correct
      return userIdResponse.data;
    } catch (error) {
      console.error('Error getting user ID:', error);
      return null;
    }
  }

  isAdmin() {
    const currentUserRole = this.getUserRole();
    return currentUserRole === 'ADMIN';
  } //isAdmin

}

export default new AuthService();
