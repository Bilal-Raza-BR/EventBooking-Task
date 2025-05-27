import React, { useEffect, useState } from 'react';
import '../Stylesheet/AdminPanel.css';
import { toast } from 'react-toastify';

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/appointments');
      const data = await res.json();
      if (res.ok) {
        setAppointments(data.data);
      } else {
        toast.error(data.message || 'Failed to fetch requests');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    }
  };

  const handleAction = async (id, action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/${action}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        fetchAppointments(); // refresh list
      } else {
        toast.error(data.message || 'Action failed');
      }
    } catch (err) {
      toast.error('Error processing request.');
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>
      {appointments.length === 0 ? (
        <p>No appointment requests found.</p>
      ) : (
        <div className="requests-grid">
          {appointments.map((req) => (
            <div key={req._id} className="request-card">
              <p><strong>Name:</strong> {req.name}</p>
              <p><strong>Email:</strong> {req.email}</p>
              <p><strong>Date:</strong> {req.date?.slice(0, 10)}</p>
              <p><strong>Time:</strong> {req.time}</p>
              <p><strong>Description:</strong> {req.description}</p>
              <p><strong>Status:</strong> <span className={`status ${req.status}`}>{req.status}</span></p>

              {req.status === 'pending' && (
                <div className="actions">
                  <button onClick={() => handleAction(req._id, 'approve')}>Approve</button>
                  <button onClick={() => handleAction(req._id, 'reject')}>Reject</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
