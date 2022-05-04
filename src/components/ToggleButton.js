import React from "react";
import "./../assets/style/RadioButton.css";

const ToggleButton = ({ data, updateOnToggle, refetchOnToggle }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name={`${data.id}`}
          id={`${data.id}`}
          onChange={() => updateOnToggle(data, refetchOnToggle)}
          checked={data?.isAllowed}
          disabled={data?.isDisabled}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor={`${data.id}`}
          className={`toggle-label block overflow-hidden h-6 rounded-full ${
            data?.isAllowed ? "bg-green-500" : "bg-red-500"
          } cursor-pointer`}
        ></label>
      </div>
      <label htmlFor={`${data.id}`} className="text-sm text-gray-700">
        {data?.isAllowed ? (
          <span className=" text-green-500 ">Allowed</span>
        ) : (
          <span className=" text-red-500 ">Blocked</span>
        )}
      </label>
    </div>
  );
};
export default ToggleButton;
