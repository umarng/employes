import "./App.css";
import Movies from "./components/Movies";
import React, { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then(result => result.json())
      .then(result => {
        setFilms(result.movies);
        setTitle(result.title);
        setDescription(result.description);
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <h2>Title = {title}</h2>
      <h3>description = {description}</h3>
      <Movies data={films} />
    </div>
  );
}

export default App;
