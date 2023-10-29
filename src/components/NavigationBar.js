import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 left-0 top-0">
      <div className="flex items-center justify-start pl-6 py-4">
        <span className="text-xl font-semibold">DataSea</span>
      </div>

      <nav>
        <ul>
          <li className="pl-6 py-2 hover:bg-gray-700">
            <Link to="/" className="flex items-center">
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </Link>
          </li>
          <li className="pl-6 py-2 hover:bg-gray-700">
            <Link to="/models" className="flex items-center">
              <i className="fas fa-database mr-3"></i>
              Models
            </Link>
          </li>
          <li className="pl-6 py-2 hover:bg-gray-700">
            <Link to="/form" className="flex items-center">
              <i className="fas fa-edit mr-3"></i>
              Form
            </Link>
          </li>
          <li className="pl-6 py-2 hover:bg-gray-700">
            <Link to="/settings" className="flex items-center">
              <i className="fas fa-cog mr-3"></i>
              Setting
            </Link>
          </li>
          <li className="pl-6 py-2 hover:bg-gray-700">
            <Link to="/logout" className="flex items-center">
              <i className="fas fa-sign-out-alt mr-3"></i>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
