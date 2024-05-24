import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://task-manager-server-five-gold.vercel.app',
    withCredentials: true
})
const useAxios = () => {
    return instance;
    
}

export default useAxios;