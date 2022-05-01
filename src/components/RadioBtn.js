import React from "react";
import "./../assets/style/RadioButton.css";

export const RadioBtn = () => {
  const [allowed, setAllowed] = React.useState(false);
  const changeAllowed = () => {
    setAllowed(!allowed);
  };
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={changeAllowed}
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          for="toggle"
          class={`toggle-label block overflow-hidden h-6 rounded-full ${
            allowed ? "bg-green-500" : "bg-red-500"
          } cursor-pointer`}
        ></label>
      </div>
      <label for="toggle" class="text-xs text-gray-700">
        {allowed ? (
          <span className=" text-green-500 ">Allowed</span>
        ) : (
          <span className=" text-red-500 ">Blocked</span>
        )}
      </label>
    </div>
  );
};
