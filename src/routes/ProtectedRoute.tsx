// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
