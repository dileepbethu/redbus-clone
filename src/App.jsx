// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./LoginForm";
import Signup from "./pages/signup";
import SearchResults from "./pages/SearchResults";
import SearchSelection from "./pages/SearchSelection";
import PassengerDetails from "./pages/PassengerDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBooking from "./pages/MyBooking";

function App() {
  return (
    <div className="container-fluid px-3 px-md-5">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/seats" element={<SearchSelection />} />
      <Route path="/passenger-details" element={<PassengerDetails />} />
      <Route path="/confirm" element={<BookingConfirmation />} />
      <Route path="/mybooking" element={<MyBooking />} />
    </Routes>
    </div>

  );
}

export default App;
