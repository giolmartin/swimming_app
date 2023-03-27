import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Home from './pages/home.page';
import Navbar from './components/Navbar/navbar.component';
import BlogsPage from './pages/Blogs/blogs.page';
import { BlogProvider } from './context/blog.context';
import BlogPage from './pages/BlogPost/blogPost.page';
import Footer from './components/Footer/footer.component';
import { useBlogContext } from './context/blog.context';

function App() {
  // const { post } = useBlogContext();
  return (
    <BlogProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogsPage />} />
          <Route path='/blog/:id' element={<BlogPage />} />
        </Routes>
      </Router>
      <Footer />
    </BlogProvider>
  );
}

export default App;
