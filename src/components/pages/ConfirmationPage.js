import { useSearchParams } from 'react-router-dom';

export default function ConfirmationPage() {
    const [searchParams] = useSearchParams();

    return (
        <section className="confirmation-page">
            <h1>Thank you for your reservation, {searchParams.get('name')}!</h1>
            <p>Your reservation has been successfully confirmed for:</p>
            <ul>
                <li>Date: {searchParams.get('date')}</li>
                <li>Time: {searchParams.get('time')}</li>
                <li>Table size: {searchParams.get('seating')}</li>
            </ul>
            <p>Confirmation details have been sent to {searchParams.get('email')}</p>
            <p>We look forward to welcoming you to Little Lemon!</p>
        </section>
    );
}