import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Welcome to Home</h1>
      <Link to="/login" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go to Login
      </Link>
    </>
  );
};

export default Home;
