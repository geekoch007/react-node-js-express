import React, { useEffect } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnalyticsDashboard from './components/AnalyticsDashboard/AnalyticsDashboard';
import EcommerceDashboard from './components/EcommerceDashboard/EcommerceDashboard';
import Slider from './components/Slider/Slider';
import Category from './components/Category/Category';
import Instagram from './components/Instagram/Instagram';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import Blog from './components/blogs/Blog';
import BlogNew from './components/blogs/BlogNew';
import BlogEdit from './components/blogs/BlogEdit';
import BlogShow from './components/blogs/BlogShow';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* user pages */}
          <Route exact index element={<AnalyticsDashboard />} />
          <Route exact path="/ecommerce-dashboard" element={<EcommerceDashboard />} />
          <Route exact path="/slider" element={<Slider />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/instagram" element={<Instagram />} />
          <Route exact path="/shop" element={<Shop />} />


          {/* /blog page list all blog items */}
          <Route exact path="/blog" element={<Blog />} />

          {/* /blog/new */}
          <Route exact path="/blog/new" element={<BlogNew />} />

          {/* /blog/1 page show or details blog item */}
          <Route exact path="/blog/:id" element={<BlogShow />} />

          {/* /blog/1/edit */}
          <Route exact path="/blog/:id/edit" element={<BlogEdit />} />

          {/* <Route exact path="/blog/*" element={<h1>Blog Not Found</h1>} /> */}

          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          {/* end of user pages */}

          <Route exact path="*" element={<AnalyticsDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
