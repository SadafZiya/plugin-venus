import React from "react";
import { Link } from "react-router-dom";

const Header = ({ backTo, title }) => {
  return (
    <div className="flex item-center">
      {backTo && (
        <Link to={backTo}>
          <button className="px-3 py-2 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded flex items-center">
            <svg
              className="w-4 h-4 dark:text-blue mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            <p> Back</p>
          </button>
        </Link>
      )}
      <h2 className="header-title">{title}</h2>
    </div>
  );
};

export default Header;
