import './App.css';
import { Routes, Route } from "react-router-dom";
import routes from './routes';  // module pattern

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => {
          return <Route {...route} key={index} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
