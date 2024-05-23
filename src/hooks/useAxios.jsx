import axios from 'axios';
const instance = axios.create({
    baseURL: '',
    withCredentials: true
})
const useAxios = () => {
    return instance;
    
}

export default useAxios;