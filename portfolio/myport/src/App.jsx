import Home from '../src/components/Home';
import Projects from '../src/components/Project';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="w-full flex justify-between items-center p-6 bg-black bg-opacity-50 shadow-lg fixed top-0 z-10">
          <h1 className="text-2xl font-bold text-white">GAYATHIRI</h1>
          <div className="flex space-x-6">
            <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded transition duration-500 shadow-[0_0_5px_#4deeea] hover:shadow-[0_0_5px_#4deeea,0_0_25px_#4deeea,0_0_50px_#4deeea,0_0_100px_#4deeea]">Home</Link>
            <Link to="/projects" className="bg-blue-500 text-white py-2 px-4 rounded transition duration-500 shadow-[0_0_5px_#4deeea] hover:shadow-[0_0_5px_#4deeea,0_0_25px_#4deeea,0_0_50px_#4deeea,0_0_100px_#4deeea]">Projects</Link>
            <Link to="/resume" className="bg-blue-500 text-white py-2 px-4 rounded transition duration-500 shadow-[0_0_5px_#4deeea] hover:shadow-[0_0_5px_#4deeea,0_0_25px_#4deeea,0_0_50px_#4deeea,0_0_100px_#4deeea]">Resume</Link>
            <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded transition duration-500 shadow-[0_0_5px_#4deeea] hover:shadow-[0_0_5px_#4deeea,0_0_25px_#4deeea,0_0_50px_#4deeea,0_0_100px_#4deeea]">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;