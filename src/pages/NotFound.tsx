import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-red-500">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
