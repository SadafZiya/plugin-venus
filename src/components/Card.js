import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/CardComponent.css";
import { RadioBtn } from "./RadioBtn.js";

function Card({ data }) {
  return (
    <div
      className={`w-1/4 rounded-md border border-gray-400 inline-flex m-4 box-border ${
        data.isDisabled ? "disabledbutton" : ""
      }`}
    >
      <div className="w-10/12 flex flex-col items-start p-4">
        <Link to={`/plugin/${data.id}`}>
          <h2 className="font-medium text-lg">{data.title}</h2>
        </Link>
        <h3 className="text-left pt-6 text-gray-400">{data.description}</h3>
      </div>
      <div className="pt-4">
        <RadioBtn />
      </div>
    </div>
  );
}

export default Card;
