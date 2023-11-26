import { Link } from "react-router-dom";


const TestCard = ({ test }) => {

    const { test_name, image, price, booked_by } = test;

    return (
        <div className="card w-full shadow-lg bg-base-100">
            <figure><img src={image} className='w-full h-[200px]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{test_name}</h2>
                
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to='/alltests'>
                    <button className="btn my-3 bg-[#1fc281]">See All Tests</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TestCard;