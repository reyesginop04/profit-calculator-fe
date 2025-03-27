const Topbar = () => {
  return (
    <header className="bg-gray-100 shadow-lg py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, User</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
      </div>
    </header>
  );
};

export default Topbar;
