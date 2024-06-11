import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/users";

class UserService {
    getAllUsers(){
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
}

export default new UserService();