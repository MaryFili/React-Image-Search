import { useState } from 'react'
import "../styles/SearchForm.css";


export default function SearchForm({ searchInput, setSearchInput, searchImages }) {

  return (
    <div className='form-container'>
      <form className='search-form' action="submit">
        <input className='search-input' type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder='Search for images' />
        <button className='search-btn' onClick={searchImages}>Search</button>
      </form>
    </div>
  )
}
