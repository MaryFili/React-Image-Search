import { useState } from 'react'

import './App.css'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import ShowMoreBtn from './components/ShowMoreBtn'

function App() {
const[results, setResults] = useState([]);
const [page, setPage] = useState(1);


  return (
    <>
   <h1 className="app-title">Image Search App</h1>
   <SearchForm setResults={setResults} page={page} setPage={setPage}/>
   <Results/>
   <ShowMoreBtn/>
    </>
  )
}

export default App
