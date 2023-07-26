import { useState } from 'react'

import './App.css'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import ShowMoreBtn from './components/ShowMoreBtn'


const accessKey = "ArsiB0FrfaoYtk4b-u6QXg90QwbHr12Xd6A64zSl8A4";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);


  async function searchImages(e) {
    e.preventDefault()

    const inputData = searchInput;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.results);
    console.log(data.results);
    setSearchInput("");
    setPage(page + 1)
  }

  return (
    <>
      <h1 className="app-title">Image Search App</h1>
      <SearchForm searchImages={searchImages} searchInput={searchInput} setSearchInput={setSearchInput} />
      <Results results={results} page={page} />
      <ShowMoreBtn />
    </>
  )
}

export default App
