import { useState, useEffect } from 'react'

import './App.css'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import ShowMoreBtn from './components/ShowMoreBtn'


const accessKey = "ArsiB0FrfaoYtk4b-u6QXg90QwbHr12Xd6A64zSl8A4";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    async function searchImages() {
      const inputData = searchInput;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
      const response = await fetch(url);
      const data = await response.json();

      // If it's a new search (page === 1), set the results directly.
      // Otherwise, concatenate the new results to the existing results.
      setResults((prevResults) => (page === 1 ? data.results : [...prevResults, ...data.results]));
    }

    searchImages();
  }, [searchInput, page]);

  return (
    <>
      <h1 className="app-title">Image Search App</h1>
      <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} setPage={setPage} page={page} />
      <Results results={results} page={page} />
      <ShowMoreBtn setPage={setPage} page={page} />
    </>
  )
}

export default App
