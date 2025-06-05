export default function ReservationsPage() {
    return (
<section className="reservations-page">
    <form method="GET" action="/confirmation">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder="eg 07864635241" required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="seating">Seating</label>
        <select name="seating" id="seating">
            <option value="1">Single</option>
            <option value="2">Couple</option>
            <option value="4">Four</option>
            <option value="5+">Five or more</option>
        </select>

        <button type="submit">Book Table</button>
    </form>
</section>
    );
}