import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheet/AdminLogin.css';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Login Successful');
        navigate('/adminPanel');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Admin Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
