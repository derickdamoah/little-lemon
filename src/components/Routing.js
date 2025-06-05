import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ReservationsPage from "./pages/ReservationsPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import OrderPage from "./pages/OrderPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
export default function Routing() {
  return (
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/reservations" element={<ReservationsPage/>} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
          <Route path="/order" element={<OrderPage/>} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage/>} />
      </Routes>
  );
}