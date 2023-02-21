import "./App.css";

import JsonConsumer from "./services/JsonConsumer";

function App() {
  var id = Math.floor(Math.random() * 101);
  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const resultado = fetch(URL)
    .then((response) => {
      console.log("🚀 ~ file: JsonConsumer.js:5 ~ .then ~ response", response);
      return <h1> {response.toString}</h1>;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: JsonConsumer.js:12 ~ JsonConsumer ~ error",
        error
      );

      return <p>{error.toString}</p>;
    })
    .then((json) => {
      console.log("🚀 ~ file: JsonConsumer.js:16 ~ .then ~ json", json);
      return <h1> {json.toString}</h1>;
    })

    .catch((error) => {
      console.log(
        "🚀 ~ file: JsonConsumer.js:21 ~ JsonConsumer ~ error",
        error
      );
      return <h1> Ha ocurrido el error : {error.toString}</h1>;
    });
  return (
    <div className="App">
      <JsonConsumer />

      <div>{resultado}</div>
    </div>
  );
}

export default App;
