import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import { BlogProvider } from './context/blog.context';
import { WorkoutProvider } from './context/workout.context';
import { UserProvider } from './context/user.context';

import NavbarLayout from './components/NavbarLayout/navbarLayout.component';
import Footer from './components/Footer/footer.component';
import ScrollToTop from './components/ScrollToTop/scrillToTop.component';

import Home from './pages/home.page';

import BlogRoutes from './routes/blog.router';
import AdminRoutes from './routes/admin.router';
import WorkoutRoutes from './routes/workout.router';
import NotFound from './pages/NotFound/notFound.page';

function App() {
  return (
    <UserProvider>
      <BlogProvider>
        <WorkoutProvider>
          <Router>
            <ScrollToTop />
            <GlobalStyle />
            <NavbarLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blogs/*' element={<BlogRoutes />} />
                <Route path='/admin/*' element={<AdminRoutes />} />
                <Route path='/workout' element={<WorkoutRoutes />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </NavbarLayout>
            <Footer />
          </Router>
        </WorkoutProvider>
      </BlogProvider>
    </UserProvider>
  );
}

export default App;
