import { useState } from 'react';
import UserForm from '../components/UserForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = (id) => {
    toast.success(`Booking Submitted! ID: ${id}`, { autoClose: 3000 });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Event Booking</h1>
          <a href="/adminLogin" className="hover:underline">Admin Login</a>
        </div>
      </nav>

      {/* Hero Section + Button */}
      <div className="container mx-auto p-6 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Book Your Event Slot</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <UserForm onSuccess={handleSuccess} />
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
}