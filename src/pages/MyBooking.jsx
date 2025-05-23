import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    const userBookings = allBookings[user?.email] || [];
    setBookings(userBookings.reverse()); // latest first
  }, [user]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold text-primary">
        🧾 My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-danger">
          ❌ No bookings found. Go book a bus now!
        </p>
      ) : (
        <div className="row">
          {bookings.map((booking, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm border">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">
                    {booking.bus.operator}
                  </h5>
                  <p className="card-text">
                    <strong>Route:</strong> {booking.bus.source} → {booking.bus.destination} <br />
                    <strong>Departure:</strong> {booking.bus.departure} <br />
                    <strong>Arrival:</strong> {booking.bus.arrival} <br />
                    <strong>Seats:</strong> {booking.seats.join(", ")} <br />
                    <strong>Price:</strong> ₹{booking.bus.price * booking.seats.length} <br />
                    <strong>Booked on:</strong> {booking.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
