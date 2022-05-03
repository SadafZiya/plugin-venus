import Home from "./pages/home"
import PluginPage from "./pages/plugin"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/plugin/:id", element: <PluginPage /> },
]
export default routes;