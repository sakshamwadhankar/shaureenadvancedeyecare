import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointmentPage from './pages/BookAppointmentPage';
import { AuthProvider } from './lib/AuthContext';
import { Agentation } from 'agentation';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
      </Routes>
      <Footer />
      {import.meta.env.DEV && (
        <Agentation 
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Session started:", sessionId);
          }}
        />
      )}
    </AuthProvider>
  );
}

export default App;
