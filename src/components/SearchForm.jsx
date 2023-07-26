import {useState} from 'react'

const accessKey = "ArsiB0FrfaoYtk4b-u6QXg90QwbHr12Xd6A64zSl8A4";

export default function SearchForm({setResults, page, setPage}) {
    const [searchInput, setSearchInput] = useState("");

async function searchImages(e){
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
<form action="submit">
    <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder='Search for images'/>
    <button className='search-btn' onClick={searchImages}>Search</button>
</form>
    </>
  )
}
