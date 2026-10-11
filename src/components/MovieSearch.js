import React, { useState} from 'react'



const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]); // State to store search results

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey2a127865c8f2844264f4fe7e524d8b3f`); // Replace with your API key
        const data = await response.json();
        setResults(data.Search || []); // Update the results state with the search results
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
                        <div key={movie.imdbID}>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
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

// const MovieSearch = () => {
//   const [searchTerm,
//     setSearchTerm] = useState('');
//   const [movies, setMovies] =
//     useState([]);
//   const [error, setError] =
//     useState(null);


//   const handleSearchChange =
//     (event) => {
//       setSearchTerm(event.target.value)
//     };


//   useEffect(() => {
//     const fetchMovies = async () => {
//       if (searchTerm) {
//         try {
//           const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY`);
//           const data = await response.json();
//           if (data.Response === "True") {
//             setMovies(data.Search); // Store the movie results in state
//             setError(null);
//           } else {
//             setMovies([]);
//             setError(data.Error); // Handle errors
//           }
//         } catch (error) {
//           setError("An error occurred while fetching movies.");
//         }
//       } else {
//         setMovies([]); // Clear results if the search term is empty
//       }
//     };

//     fetchMovies();
//   }, [searchTerm]); // Dependency array ensures this runs when searchTerm changes

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       {error && <p>{error}</p>}
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.imdbID}>{movie.Title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieSearch;






