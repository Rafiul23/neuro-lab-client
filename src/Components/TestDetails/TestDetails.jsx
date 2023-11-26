import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";


const TestDetails = () => {

    const test = useLoaderData();

    const { _id, image, test_name, slot, test_description, date, price } = test;

    return (
        <div className="my-10">
            <SectionTitle
            heading={test_name}
            subheading='This is about'
            ></SectionTitle>
             
           <div className="my-4 flex justify-between">
            <img src={image} alt="" className="w-1/2 h-1/2" />
           <div className="w-1/2 p-4 space-y-3">
           <h2 className="text-3xl font-bold ">Test Name: {test_name}</h2>
            <p><span className="font-bold">Description:</span> {test_description}</p>
            <p><span className="font-bold">Available slot:</span> {slot}</p>
            <p><span className="font-bold">Price:</span> ${price}</p>
            <p><span className="font-bold">Date:</span> {date}</p>
            <button className="btn my-3 text-white bg-[#1fc281]">Buy Now</button>
           </div>
           </div>
        </div>
    );
};

export default TestDetails;