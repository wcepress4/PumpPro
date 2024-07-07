import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/users";

class UserService {
    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL)
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user)
    }

    getUserById(userId) {
        return axios.get(USER_BASE_REST_API_URL + '/' + userId)
    }

    updateUser(userId, user) {
        return axios.put(USER_BASE_REST_API_URL + '/' + userId, user)
    }

    deleteUser(userId) {
        return axios.delete(USER_BASE_REST_API_URL + '/' + userId)
    }

    getUserIdByLogin(login) {
        return axios.get(USER_BASE_REST_API_URL + '/id/' + login)
    }

    // registerUser(user) {
    //     return axios.post(`${AUTH_BASE_REST_API_URL}/register`, user);
    // }

    // loginUser(credentials) {
    //     return axios.post(`${AUTH_BASE_REST_API_URL}/login`, credentials);
    // }
}

export default new UserService();