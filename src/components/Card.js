import React from "react";

// import RadioBtn from "./RadioBtn";

function Card({ status, title, content, radioStatus }) {
  return (
    <div class="w-1/4 rounded-md border border-gray-400 inline-flex m-4 box-border">
      <div class="w-10/12 flex flex-col items-start p-4">
        <h2 class="font-medium text-lg">{title}</h2>
        <h3 class="text-left pt-6 text-gray-400">{content}</h3>
      </div>
      <div>
        {/* <RadioBtn /> */}
      </div>
    </div>
  );
}

export default Card;
