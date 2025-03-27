import Button from "../components/Button";
import { useAuth } from "../providers/AuthProvider";

const Topbar = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-gray-100 shadow-lg py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, User</span>
        <Button
          onClick={() => {
            logout();
            window.location.href = "/"; // Redirect to login
          }}
          className="px-4 py-2"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
