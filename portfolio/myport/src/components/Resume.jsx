import React from 'react';
const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-5xl font-bold mb-8 animate-fadeIn text-center">Resume</h2>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-3xl w-full animate-slideIn text-center">
        <p className="text-2xl text-center mb-6">
          Download my resume to see my full education, experience, and skill set.
        </p>
        <a
          href="https://drive.google.com/file/d/1TRoj-o4c06HsIfdtflz32ymkEoraFH4B/view?usp=sharing"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 px-6 rounded-full font-bold shadow-lg transform transition hover:scale-105 text-center"
          download
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
