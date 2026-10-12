import React, { useState, useEffect } from 'react'

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
// }

const base_url = 'https://image.tmdb.org/t/p/original';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]); // State to store search results

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a127865c8f2844264f4fe7e524d8b3f&query=${encodeURIComponent(searchTerm)}`); // Replace with your API key
    const data = await response.json();
    // console.log(data);
    setResults(data.results || []); // Update the results state with the search results
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input className="movie_search"
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search" type="submit">Search</button>
      </form>
      <div className="list">
        {results.length > 0 ? (
          results.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>

              <img
                className={`row__poster ${"row__posterLarge"}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name} />
            </div>

          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;








