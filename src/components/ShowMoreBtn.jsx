import React from 'react'

export default function ShowMoreBtn({ setPage, page }) {
  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='show-more-btn-container'>
      <button className="show-more-btn search-btn" onClick={handleShowMore}>Show More</button>
    </div>
  )
}
