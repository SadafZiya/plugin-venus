import React from "react";
import {Link} from "react-router-dom";
import "../assets/style/CardComponent.css";
import ToggleButton from "./ToggleButton";

const Card = ({cardInfo, key, refetch, updateOnToggle, navigateTo}) => {
    return (
        <div
            id={key}
            className={`w-1/4 rounded-md border border-gray-400 inline-flex m-4 box-border ${
                cardInfo.isDisabled ? (cardInfo.isDisabled ? "disabled-button" : "") : ""
            }`}
        >
            <div className="w-10/12 flex flex-col items-start p-4 cursor-pointer">
                <Link to={navigateTo}>
                    <h2 className="font-medium text-lg">
                        {cardInfo.title ? cardInfo.title : ""}
                    </h2>
                </Link>
                <h3 className="text-left pt-6 text-gray-400 tooltip">
                    {cardInfo.description
                        ? cardInfo.description.length >= 50
                            ? cardInfo.description.substr(0, 50) + "..."
                            : cardInfo.description
                        : ""}
                    <span
                        className={`tooltiptext ${
                            cardInfo.description
                                ? cardInfo.description.length >= 50
                                ? ""
                                : "hidden"
                                : ""
                        }`}
                    >
            {cardInfo.description
                ? cardInfo.description.length >= 50
                    ? cardInfo.description
                    : ""
                : ""}
          </span>
                </h3>
            </div>
            <div className="pt-4">
                <ToggleButton data={cardInfo} refetch={refetch} id={key} updateOnToggle={updateOnToggle}/>
            </div>
        </div>
    );
}

export default Card;