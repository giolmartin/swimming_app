import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';
import Navbar from './components/Navbar/navbar.component';
import { GlobalStyle } from './global.styles';
// import BlogPostCard from './components/BlogPostCard/blogPostCard.component';
import BlogPage from './pages/Blogs/blogs.page';
const post = {
  title: 'This is a title',
  date: 'This is a date',
  excerpt: 'This is an excerpt',
  imageUrl: './images/landing.jpeg',
};
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
