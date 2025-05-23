import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import AuthContext

const BookingConfirmation = () => {
  const { user } = useAuth(); // ✅ Get current logged-in user
  const { state } = useLocation();
  const { bus, selectedSeats, passengerDetails, totalPrice } = state;

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="container py-4">
      <div ref={printRef} className="border p-4 rounded bg-light">
        <h2 className="text-success">✅ Booking Confirmed!</h2>
        <h4>
          Thank you {user?.name ? user.name : user?.email || "Guest"} for booking with us!
        </h4>
        <hr />
        <h5 className="mb-3">{bus.operator}</h5>
        <p><strong>Route:</strong> {bus.source} → {bus.destination}</p>
        <p><strong>Departure:</strong> {bus.departure}</p>
        <p><strong>Date:</strong> {bus.date}</p>
        <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>

        {passengerDetails.length > 0 && (
          <>
            <h5 className="mt-4">Passenger Details</h5>
            <ul className="list-group mb-3">
              {passengerDetails.map((p, i) => (
                <li key={i} className="list-group-item">
                  <strong>Seat {p.seat}</strong>: {p.name}, Age: {p.age}, Gender: {p.gender}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        🖨️ Download/Print Ticket
      </button>
    </div>
  );
};

export default BookingConfirmation;
