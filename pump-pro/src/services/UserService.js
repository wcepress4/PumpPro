import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/users";

class UserService {
    getAllUsers(){
        return axios.get(USER_BASE_REST_API_URL)
    }
}

export default new UserService();