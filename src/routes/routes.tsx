import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProductCalculation from "../pages/ProductCalculation";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirect root to dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="product-calculation" element={<ProductCalculation />} />
      </Route>

      {/* Open to everyone */}
      <Route path="/" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
