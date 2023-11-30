import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Payment from "../Payment/Payment";
import { useState } from "react";


const TestDetails = () => {

    const test = useLoaderData();

    const [disabled, setDisabled] = useState(false);

    const { _id, image, test_name, slot, test_description, date, price } = test;

    const [reducedPrice, setReducedPrice] = useState(price);

    const handleApplyCoupon = e =>{
        e.preventDefault();
        const form = e.target;
        const coupon = form.coupon.value;
        if(coupon === 'NEU2024'){
            const currentPrice = parseFloat(price) - ((parseFloat(price) * 10) / 100); 
            setReducedPrice(currentPrice);
            setDisabled(true); 
        } else {
            setReducedPrice(price);
        }
    }

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

                    <p><span className="font-bold">Reduced Price:</span> ${reducedPrice}</p>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button disabled={disabled} className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply Coupon</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold my-4 text-lg">Write the coupon code below:</h3>
                            <form onSubmit={handleApplyCoupon}>
                            <input type="text" placeholder="Write coupon" name="coupon" className="input input-bordered input-success mr-2 w-full max-w-xs" />
                                <button className="btn bg-[#1fc281] text-white">Apply</button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <Payment test={test} price={reducedPrice}></Payment>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;