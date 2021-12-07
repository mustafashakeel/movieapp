import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {

    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=6d8a135e&s=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(" movie data ", responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }


  }
  useEffect(() => {
    getMovieRequest();
  });


  return (
    <div className="container-fluid movie-app">
      <MovieListHeading heading="Movie List Heading" />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />


      <div className="row">

        <MovieList movies={movies} />

      </div>

    </div>
  );
}

export default App;
