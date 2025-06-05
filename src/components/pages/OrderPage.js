import { useSearchParams } from 'react-router-dom';

export default function OrderPage() {
    const [searchParams] = useSearchParams();

    return (
        <section className="order-page">
            <form action="/order-confirmation" method="get">
                <img src={searchParams.get('image')} alt={searchParams.get('image')}/>
                <h3>{searchParams.get('title')}</h3>
                <p><strong>{searchParams.get('price')}</strong></p>
                <input type="hidden" name="image" value={searchParams.get('image')}/>
                <input type="hidden" name="title" value={searchParams.get('title')}/>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" defaultValue="1"/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" required/>
                <button type="submit">Order</button>
            </form>
        </section>
    );
}