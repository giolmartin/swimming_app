import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './private.router';
import AdminDashboard from '../pages/Dashboard/adminDashboard.page';
import AdminPosts from '../components/Admin/AdminPosts/adminPosts.component';
import AdminCategories from '../components/Admin/AdminCategories/adminCategories.component';
import AdminUsers from '../components/Admin/AdminUsers/adminUsers.component';
import AdminSettings from '../components/Admin/AdminSettings/adminSettings.component';
import AdminLogin from '../pages/AdminLogin/adminLogin.page';
import AdminPostEditor from '../components/Admin/EditPost/adminPostEditor.component';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<AdminLogin />} />
      <Route path='/dashboard' element={<PrivateRoute />}>
        <Route index element={<AdminDashboard />} />
        <Route path='posts' element={<AdminPosts />} />
        <Route path='posts/edit/:id' element={<AdminPostEditor />} />
        {/* <Route path='posts/edit/create' element={<AdminPostEditor />} /> */}
        <Route path='categories' element={<AdminCategories />} />
        <Route path='users' element={<AdminUsers />} />
        <Route path='settings' element={<AdminSettings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
