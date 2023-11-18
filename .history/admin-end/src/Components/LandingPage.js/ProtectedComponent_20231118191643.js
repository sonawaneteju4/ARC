import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {
    // Implement your authentication logic here
    return !!sessionStorage.getItem('token'); // For example, checking token existence
  };

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
