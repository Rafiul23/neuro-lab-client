import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Services = () => {
    const axiosPublic = useAxiosPublic();

    const [allTests, setAllTests] = useState([]);


    axiosPublic.get('/alltests')
        .then(data => setAllTests(data.data));


    return (
        <div>
            <h2 className="text-3xl my-4 text-center text-[#1fc281] font-bold">Contact Us</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Test Name</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTests.map((test, idx)=> <tr key={test._id}>
                             <td>{idx + 1}</td>   
                            <td>{test.test_name}</td>
                            <td>{test.price}</td>
                            
                        </tr>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Services;