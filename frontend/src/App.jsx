import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import './app.css';

function App() {
  return (
    
  
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route 
          path="/adminPanel" 
          element={
            localStorage.getItem("isAdmin") ? (
              <AdminPanel />
            ) : (
              <Navigate to="/adminLogin" replace />
            )
          } 
        />
      </Routes>
    </Router>
   
    
  );
}
export default App;
