import axios from 'axios';
const getUserApi = () => {
    return axios.get('https://reqres.in/api/users?page=2')
}
export {getUserApi}