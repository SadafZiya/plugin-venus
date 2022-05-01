import './App.css';
import "./App.css";
import Header from './components/Header';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
        <Header  title='Marketing Plugins'/>
      <Card
        title="Plugin 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        status="true"
      />
    </div>
  );
}

export default App;
