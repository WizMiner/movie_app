import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Define state with useState
  const [trendingMovies, setTrendingMovies] = useState([]);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>
          {/* Pass both searchTerm and setSearchTerm as props */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* <h1> output of search is here this how it work <span className="text-gradient">{searchTerm}</span>            </h1> */}
        </div>
      </div>
    </main>
  );
}

export default App;
