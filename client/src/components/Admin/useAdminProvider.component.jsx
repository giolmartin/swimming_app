import { AdminProvider } from '../../context/admin.context';

const useAdminProvider = (Component) => {
  return (props) => (
    <AdminProvider>
      <Component {...props} />
    </AdminProvider>
  );
};

export default useAdminProvider;
