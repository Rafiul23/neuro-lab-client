import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY);

const Payment = ({price}) => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-[#1fc281]">Please! Pay Now</h2>

            <div className="my-4">
            <Elements stripe={stripPromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;