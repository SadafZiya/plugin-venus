import { useState } from "react";

import "./App.css";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({
    id: 1,
    title: "Plugin 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu. Placerat orci nulla pellentesque dignissim enim. Et ultrices neque ornare aenean euismod elementum nisi quis. Non arcu risus quis varius.",
    isDisabled: true,
    isAllowed: false,
  });

  return (
    <div className="App">
      <Header title="Marketing Plugins" />
      <Card data={data} />
    </div>
  );
}

export default App;
