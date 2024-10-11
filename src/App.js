import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseDetails from './components/CourseDetails';
import Marketing from './components/Marketing';
import Contact from './components/Contact';
import Support from './components/Support';
import LazyLoading from './components/LazyLoading'; // استيراد LazyLoading

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-2">
        <Routes>
          <Route
            path="/"
            element={
              <LazyLoading>
                <Home /> {/* محتوى الصفحة الرئيسية */}
              </LazyLoading>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <LazyLoading>
                <CourseDetails />
              </LazyLoading>
            }
          />
          <Route
            path="/products"
            element={
              <LazyLoading>
                <Marketing />
              </LazyLoading>
            }
          />
          <Route
            path="/support"
            element={
              <LazyLoading>
                <Support />
              </LazyLoading>
            }
          />
          <Route
            path="/contact"
            element={
              <LazyLoading>
                <Contact />
              </LazyLoading>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
