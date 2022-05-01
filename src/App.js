import "./App.css";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { RadioBtn } from "./components/RadioBtn";

function App() {
  return (
    <div className="App">
      <Header title="Marketing Plugins" />
      <Card
        title="Plugin 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        status="true"
      />
      <RadioBtn />
    </div>
  );
}

export default App;
