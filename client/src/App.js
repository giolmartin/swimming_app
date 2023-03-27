import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import { BlogProvider } from './context/blog.context';
import { WorkoutProvider } from './context/workout.context';
import { UserProvider } from './context/user.context';

import Home from './pages/home.page';
import Navbar from './components/Navbar/navbar.component';
import BlogsPage from './pages/Blogs/blogs.page';
import BlogPage from './pages/BlogPost/blogPost.page';
import WorkoutPage from './pages/Workout/workout.page';
import Footer from './components/Footer/footer.component';
import AdminLogin from './pages/AdminLogin/adminLogin.page';
import AdminDashboard from './pages/Dashboard/adminDashboard.page';

function App() {
  return (
    <UserProvider>
      <BlogProvider>
        <WorkoutProvider>
          <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin-login' element={<AdminLogin />} />
              <Route path='/admin-dashboard' element={<AdminDashboard />} />
              <Route path='/blogs' element={<BlogsPage />} />
              <Route path='/blogs/:id' element={<BlogPage />} />
              <Route path='/workout' element={<WorkoutPage />} />
            </Routes>
          </Router>
          <Footer />
        </WorkoutProvider>
      </BlogProvider>
    </UserProvider>
  );
}

export default App;
