import axios from 'axios';
const getUserApi = () => {
    return axios.get(`https://reqres.in/api/users?page=2`)
}
export {getUserApi}

const postApi = (data) => {debugger
    return axios.post(`https://reqres.in/api/login`,data)
}
export {postApi}

