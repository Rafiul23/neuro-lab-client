import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import AllTestsCard from "../AllTestsCard/AllTestsCard";


const AllTests = () => {

    const [allTests, setAllTests] = useState([]);
    const axiosPublic = useAxiosPublic();

    axiosPublic.get('/alltests')
    .then(data => setAllTests(data.data));

    return (
        <div className="my-10">
            <SectionTitle
            heading='We are offering you these tests'
            subheading='Check Your Preferred Tests'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {
                    allTests.map(test => <AllTestsCard key={test._id} test={test}></AllTestsCard>)
                }
            </div>

        </div>
    );
};

export default AllTests;