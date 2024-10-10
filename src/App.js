import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseDetails from './components/CourseDetails';
import Marketing from './components/Marketing'; // تأكد من استيراد هذه المكونات
import Contact from './components/Contact';
import Support from './components/Support';
import "./components/styles.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className=" mt-2">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/products" element={<Marketing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </Router>
    

  );
};

export default App;
