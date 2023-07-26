import React from 'react';
import "../styles/Results.css";

export default function Results({ results }) {
  return (
    <div className="search-results-container">

      {!results ?
        <h2> No results found</h2>
        :
        <>
          {results.map((result) => (
            <div className="search-result" key={result.id}>
              <img src={result.urls.small} alt={result.alt_description} />
              <a href={result.links.html} target="_blank">{result.alt_description}</a>
            </div>
          ))}
        </>
      }
    </div>
  )
}
