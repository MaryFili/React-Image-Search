import { useState } from 'react'
import "../styles/SearchForm.css";


export default function SearchForm({ searchInput, setSearchInput, setPage }) {
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset the page to 1 when a new search is submitted.
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className='form-container' >
      <div className='search-form' >
        <input className='search-input' type="text" value={searchInput} onChange={handleInputChange} placeholder='Search for images' />
        <button className='search-btn' onClick={handleSearchFormSubmit} >Search</button>
      </div>
    </div>
  )
}
