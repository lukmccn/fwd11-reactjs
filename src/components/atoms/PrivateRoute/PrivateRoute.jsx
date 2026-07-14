import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export function PrivateRoute({ children, guestOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (guestOnly && user) {
    return <Navigate to="/" replace />;
  }

  if (!guestOnly && !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
