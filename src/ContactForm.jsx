import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="border border-gray-400 px-4 py-2 w-full rounded-md" required />
        </div>
        {/* Add email and message fields here */}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
