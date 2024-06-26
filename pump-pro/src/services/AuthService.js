import axios from "axios";

const AUTH_BASE_REST_API_URL = "http://localhost:8080";

class AuthService {
    registerUser(user) {
        return axios.post(`${AUTH_BASE_REST_API_URL}/register`, user);
    }

    loginUser(credentials) {
        return axios.post(`${AUTH_BASE_REST_API_URL}/login`, credentials);
    }
}

export default new AuthService();