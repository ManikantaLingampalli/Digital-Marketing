import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Enter a valid email address';
    if (!message.trim()) return 'Message is required';
    if (message.length < 10) return 'Message should be at least 10 characters';

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      toast.loading('Sending your message...');
      await axios.post(`${API_URL}/api/contact`, formData);
      toast.dismiss();
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      className="relative h-[100vh] md:min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-30 py-24 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/djvcd6qvd/image/upload/v1749999092/ChatGPT_Image_Jun_15_2025_08_20_25_PM_rx0zbf.png')`,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full md:w-1/2 text-white animate-fade-in">
        <h2 className="text-4xl md:text-7xl font-serif font-bold">Digital</h2>
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-orange-500 mt-4">Marketing</h2>
        <p className="mt-6 max-w-xl md:text-2xl text-gray-200">We Care And Promote Your Business</p>
        <button className="mt-8 px-8 py-3 bg-orange-500 text-black font-bold hover:bg-orange-600 rounded-[0.5vw] transition">
          JOIN US
        </button>
      </div>

      {/* Contact Form */}
      <section className="relative z-10 mt-12 md:mt-0 w-full md:w-1/2 bg-black/70 p-8 rounded-xl shadow-lg max-w-md text-white animate-fade-in">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">Send Us Your Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold transition"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Home;
