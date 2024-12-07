import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-5xl font-bold mb-8 animate-fadeIn text-center mt-10">Contact Me</h2>
      <form className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-3xl animate-slideIn">
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-lg font-bold transform transition hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

