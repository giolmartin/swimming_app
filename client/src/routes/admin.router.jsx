import { Routes, Route } from 'react-router-dom';

import useAdminProvider from '../components/Admin/useAdminProvider.component';

import AdminLogin from '../pages/AdminLogin/adminLogin.page';
import PrivateRoute from './private.router';

import AdminDashboard from '../pages/Dashboard/adminDashboard.page';

import AdminPosts from '../components/Admin/AdminPosts/adminPosts.component';
import AdminCategories from '../components/Admin/AdminCategories/adminCategories.component';
import AdminUsers from '../components/Admin/AdminUsers/adminUsers.component';
import AdminSettings from '../components/Admin/AdminSettings/adminSettings.component';
import AdminPostEditor from '../components/Admin/EditPost/adminPostEditor.component';

const AdminRoutes = () => {
  const AdminDashboardUsingProvider = useAdminProvider(AdminDashboard);
  const AdminPostsUsingProvider = useAdminProvider(AdminPosts);
  const AdminPostEditorUsingProvider = useAdminProvider(AdminPostEditor);
  const AdminCategoriesUsingProvider = useAdminProvider(AdminCategories);
  const AdminUsersUsingProvider = useAdminProvider(AdminUsers);
  const AdminSettingsUsingProvider = useAdminProvider(AdminSettings);

  return (
    <Routes>
      <Route path='/login' element={<AdminLogin />} />
      <Route
        path='/dashboard'
        element={<PrivateRoute element={<AdminDashboardUsingProvider />} />}
      />
      <Route
        path='/dashboard/posts'
        element={<PrivateRoute element={<AdminPostsUsingProvider />} />}
      />
      <Route
        path='/dashboard/posts/edit/:id'
        element={<PrivateRoute element={<AdminPostEditorUsingProvider />} />}
      />
      <Route
        path='/dashboard/categories'
        element={<PrivateRoute element={<AdminCategoriesUsingProvider />} />}
      />
      <Route
        path='/dashboard/users'
        element={<PrivateRoute element={<AdminUsersUsingProvider />} />}
      />
      <Route
        path='/dashboard/settings'
        element={<PrivateRoute element={<AdminSettingsUsingProvider />} />}
      />
    </Routes>
  );
};

export default AdminRoutes;
