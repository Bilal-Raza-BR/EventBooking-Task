import { useState } from 'react';
import { toast } from 'react-toastify';

export default function UserForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      onSuccess(data._id); // Trigger toast + close modal
    } catch (err) {
      toast.error("Failed to submit. Try again!");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-blue-500"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      {/* Add other fields (email, date, description) similarly */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        Submit Request
      </button>
    </form>
  );
}