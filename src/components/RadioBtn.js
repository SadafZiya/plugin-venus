import React from "react";
import "./../assets/style/RadioButton.css";

export const RadioBtn = ({ value, disabled }) => {
  const [allowed, setAllowed] = React.useState(false);
  const changeAllowed = () => {
    setAllowed(!allowed);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={changeAllowed}
          checked={!!allowed}
          disabled={!!disabled}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-6 rounded-full ${
            allowed ? "bg-green-500" : "bg-red-500"
          } cursor-pointer`}
        ></label>
      </div>
      <label htmlFor="toggle" className="text-xs text-gray-700">
        {allowed ? (
          <span className=" text-green-500 ">Allowed</span>
        ) : (
          <span className=" text-red-500 ">Blocked</span>
        )}
      </label>
    </div>
  );
};
