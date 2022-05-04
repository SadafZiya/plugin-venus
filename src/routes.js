import React from "react";
import Home from "./pages/home";
import PluginPage from "./pages/plugin";
import NotFoundPage from "./pages/notFoundPage";

const routes = [
    { path: "*", element: <NotFoundPage /> },
    { path: "/404", element: <NotFoundPage /> },
    { path: "/", element: <Home /> },
    { path: "/plugin/:id", element: <PluginPage /> },
];
export default routes;
