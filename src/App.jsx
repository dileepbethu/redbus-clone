// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import LoginForm from './LoginForm';
import Signup from './pages/signup';
import SearchSelection from './pages/SearchSelection';
import SearchResults from './pages/SearchResults';
import PassengerDetails from './pages/PassengerDetails';
import BookingConfirmation from './pages/BookingConfirmation';
import MyBooking from './pages/MyBooking';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/search" element={<SearchSelection />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/mybookings" element={<MyBooking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
