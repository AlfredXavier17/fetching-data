import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  function getData() {
    axios
      .get("http://127.0.0.1:8000/hello/")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={getData}>Get data</button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

export default App;
