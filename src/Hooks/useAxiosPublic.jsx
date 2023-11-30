import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://neuro-lab-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;