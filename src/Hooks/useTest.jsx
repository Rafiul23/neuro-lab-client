import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTest = () => {

    const axiosPublic = useAxiosPublic();

    const {data: tests = [], isPending: loading, refetch} = useQuery({
        queryKey: ['tests'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/alltests');
            return res.data;
        }
    })

    return [tests, loading, refetch];
};

export default useTest;