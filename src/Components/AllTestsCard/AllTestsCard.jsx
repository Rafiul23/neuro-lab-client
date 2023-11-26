import { Link } from "react-router-dom";


const AllTestsCard = ({ test }) => {

    const { _id, image, test_name, slot, test_description, date, price } = test;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="w-full h-[200px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{test_name}</h2>
                <p>{test_description.slice(0, 50)}</p>
                <p>Price: ${price}</p>
                <p>Slot: {slot}</p>
                <p>Date: {date}</p>
                <div className="card-actions justify-end">
                    <Link to={`/test/${_id}`}>
                    <button className="btn my-3 bg-[#1fc281]">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllTestsCard;