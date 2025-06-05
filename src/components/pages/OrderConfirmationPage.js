import {useSearchParams} from "react-router-dom";

export default function OrderConfirmationPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const image = searchParams.get('image');
    const name = searchParams.get('name');
    const address = searchParams.get('address');

    return (
        <section className="order-confirmation-page">
            <h1>Thank you for your order, {name}!</h1>
            <p>Your order has been successfully placed for:</p>
            <img src={image} alt={image}/>
            <h3>{title}</h3>
            <p>Your order will be delivered at: <span>{address}</span></p>
        </section>
    );
}