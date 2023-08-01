// FrontPage.js
import React from 'react';

const FrontPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Impossible Interest Bank</h1>
          <p className="text-lg">Your trusted bank for impossible interest rates!</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <img src="/bank-image.jpg" alt="Bank" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-4">Our Features</h2>
              <ul className="list-disc list-inside">
                <li>High interest rates on savings</li>
                <li>Low-interest loans with flexible terms</li>
                <li>Secure online banking</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="border border-gray-400 px-4 py-2 w-full rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="border border-gray-400 px-4 py-2 w-full rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Your Message" className="border border-gray-400 px-4 py-2 w-full rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Impossible Interest Bank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
