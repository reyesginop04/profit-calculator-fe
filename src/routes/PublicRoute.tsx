// src/routes/PublicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";

const PublicRoute = () => {
  const { token } = useAuth();
  return !token ? (
    <UnauthenticatedLayout>
      <Outlet />
    </UnauthenticatedLayout>
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default PublicRoute;
