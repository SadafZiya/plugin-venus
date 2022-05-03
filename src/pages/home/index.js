import { useQuery } from "react-query";
import Header from "../../components/Header";
import Card from "../../components/Card";

const Home = () => {
  async function fetchPlugins() {
    const response = await fetch("http://localhost:3001/items");
    const data = await response.json();
    return data;
  }

  function updatePlugin(isAllowed, id) {
    fetch(`http://localhost:3001/items/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isAllowed: !isAllowed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const { isLoading, error, data } = useQuery("pluginData", fetchPlugins);

  return (
    <div className="">
      <Header title="Marketing Plugins" />
      <div className="container">
        {isLoading ? (
          <p>Loading ...</p>
        ) : error ? (
          <p>Error! {error.message}</p>
        ) : (
          data &&
          data.length &&
          data.map((plugin) => {
            return (
              <Card cardInfo={plugin} key={plugin.id} updatePlugin={updatePlugin} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
