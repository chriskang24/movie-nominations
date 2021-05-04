import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./Results";
import Nominations from './Nominations'
import Banner from './Banner'

const API_KEY = process.env.REACT_APP_OMDB_KEY;

const MovieSearch = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?s=${term}?&type=movie&apikey=${API_KEY}`

    axios.get(apiUrl)
      .then(response => {
        if (response.data.Error) return null

        const movieResults = response.data.Search
        setResults(movieResults)
      })
  }, [term])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('nominations')
    );

    if (movieFavourites) setNominations(movieFavourites);
  }, []);

  useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(nominations));
  }, [nominations])

  return (
    <Fragment>
      {
        nominations.length === 5 && <Banner />
      }
      <div className="container p-3 my-3 border">
        <SearchBar onSearch={term => setTerm(term)} />
      </div>
      <div className="container-display">
        <div className="container p-3 my-3 border">

          <h2 className="header-size">
            Movie Results Below:
          </h2>

          <div>
            <Results
              results={results}
              nominations={nominations}
              setNominations={setNominations}
            />
          </div>
        </div>
        <div className="container p-3 my-3 border">
          <h2 className="header-size">
            Nominations Below:
          </h2>
          <div>
            <Nominations
              nominations={nominations}
              setNominations={setNominations}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )

}

export default MovieSearch;