import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/CardComponent.css";
import { RadioBtn } from "./RadioBtn.js";

function Card({ cardInfo, updateOnToggle }) {
    const navigate = useNavigate();
    const goToCardDetail = () => {
        navigate(`/items/${cardInfo.id}`);
    };
    return (
        <div
            className={`w-1/4 rounded-md border border-gray-400 inline-flex m-4 box-border ${
                cardInfo.isDisabled
                    ? cardInfo.isDisabled
                    ? "disabledbutton"
                    : ""
                    : ""
            }`}
        >
            <div
                className="w-10/12 flex flex-col items-start p-4 cursor-pointer"
                onClick={goToCardDetail}
            >
                <h2 className="font-medium text-lg">
                    {cardInfo.title ? cardInfo.title : ""}
                </h2>
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
                <RadioBtn
                    data={cardInfo}
                    updateOnToggle={updateOnToggle}
                />
            </div>
        </div>
    );
}

export default Card;