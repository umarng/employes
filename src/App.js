import "./App.css";
import Movies from "./components/Movies";
import React, { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then(result => result.json())
      .then(result => setFilms(result.movies))
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <Movies data={films} />
    </div>
  );
}

export default App;
