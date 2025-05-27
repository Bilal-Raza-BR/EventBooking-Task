import React, { useState } from 'react';
import '../Stylesheet/AppointmentModal.css';
import { toast } from 'react-toastify';

const AppointmentModal = ({ onClose }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        description: '',
        time: '',
        date: '',
        status: 'pending'
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/requstSubmit/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message || 'Appointment submitted!');
                onClose();
            } else {
                toast.error(data.message || 'Something went wrong');
            }
        } catch (err) {
            toast.error('Network error. Try again later.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="time"
                        placeholder="Time (e.g., 3:00 PM)"
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Event Description"
                        required
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                    <button className="close-btn" type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;
