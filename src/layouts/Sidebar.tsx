import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-52 flex-shrink-0 bg-gray-100 shadow-lg h-full flex flex-col">
      <div className="p-6 text-2xl font-extrabold text-blue-600">Profit Cost</div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block px-6 py-3 rounded-lg hover:bg-blue-100 text-gray-700 font-medium">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/product-calculation"
              className="block px-6 py-3 rounded-lg hover:bg-blue-100 text-gray-700 font-medium"
            >
              Product Calculation
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
