import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentModal from '../components/AppointmentModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to Event Booking System</h1>
        <button className="appointment-btn" onClick={() => setShowModal(true)}>
          Book Appointment
        </button>
      </div>

      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
      <Footer />
    </>
  );
};

export default Home;
