import React from 'react';
import Calculator from './Calculator';
import FrontPage from './FrontPage';
import ContactForm from './ContactForm';
import './styles.css'; 

function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Calculator />
      <FrontPage />
      <ContactForm />
    </div>
  );
}

export default App;

