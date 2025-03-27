const Topbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center">
        <span className="text-gray-600">Welcome, User</span>
      </div>
    </header>
  );
};

export default Topbar;
