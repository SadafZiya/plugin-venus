import React from "react";
import notFoundPhoto from "../../assets/images/404.png";
import "../../assets/style/NotFoundPage.css";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/");
    };
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <img
                className={`not-found-image w-full h-full`}
                src={notFoundPhoto}
                alt="notfound"
            />
            <button
                onClick={goToHomePage}
                className="bg-blue-500 text-white font-semibold px-10 py-3 sm:-mt-24 rounded-3xl"
            >
                Go Home Page
            </button>
        </div>
    );
};

export default NotFoundPage;
