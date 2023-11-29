import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = ({price}) => {

    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    console.log(price);

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: price} )
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure, price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.name || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log(confirmError);
        } else {
            console.log(paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

        if(error){
            console.log('Payment error', error);
            setError(error.message);
        } else {
            console.log('Payment Method', paymentMethod);
            setError('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="my-4 btn bg-[#1fc281] text-white" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600 font-bold">{error}</p>
           { transactionId && <p className="text-green-600 font-bold">Your Transaction ID: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;