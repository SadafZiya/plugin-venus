import Home from "./pages/home";
import PluginPage from "./pages/plugin";
import NotFoundPage from "./pages/notfoundpage";

const routes = [
    { path: "*", element: <NotFoundPage /> },
    { path: "/", element: <Home /> },
    { path: "/plugin/:id", element: <PluginPage /> },
];
export default routes;
