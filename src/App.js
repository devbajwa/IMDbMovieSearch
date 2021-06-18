import "./styles.css";
import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Spirit: Stallion of the Cimarron");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "bd84b693d2msh9e70a10139d6d62p18a44fjsnd1b89f6fc5ad",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
          }
        }
      );
      const data = await res.json();
      //console.log(data.d[0].i.imageUrl);
      setMovies(data.d);
      setSearch("");
    } catch (err) {
      //alert(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1 className="main-title">MOVIE SEARCH</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
      {movies
        .filter((movie) => movie.hasOwnProperty("i"))
        .map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
    </div>
  );
}
