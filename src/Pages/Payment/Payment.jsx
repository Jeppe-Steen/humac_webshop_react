import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

    const handleToken = (token, addresses) => {
        console.log(token);
        console.log(addresses);
    }
    return (
            <StripeCheckout
                billingAddress
                shippingAddress
                amount={1234}

                currency="DKK"
                stripeKey="pk_test_51IfJhQIYeuvmGxun9bmxFuv64W9GTQS4BgWJYlP7yKHgn24pLpllQ5c2eilPsTvvTh1guIQLzM4ihGrhjikY3U8x00C8Ves4KX"
                token={handleToken}
            />
    )
};

export default Payment;