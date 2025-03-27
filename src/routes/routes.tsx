import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
// Define routes in arrays
const unauthenticatedRoutes = [{ path: "/", element: <Login /> }];

const authenticatedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  //   { path: "/settings", element: <Settings /> },
  //   { path: "/profile", element: <Profile /> },
];

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Unauthenticated Routes */}
      {unauthenticatedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <UnauthenticatedLayout>{element}</UnauthenticatedLayout>
            )
          }
        />
      ))}

      {/* Authenticated Routes */}
      {authenticatedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={isAuthenticated ? <AuthenticatedLayout>{element}</AuthenticatedLayout> : <Navigate to="/" replace />}
        />
      ))}

      {/* Catch-All 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
