import React from 'react';
import "../styles/Results.css";

export default function Results({ page, results }) {
  return (
    <div className="search-results-container">
      {page === 1 && (
        <>
          <div className="search-result">
            <img src="https://images.unsplash.com/photo-1690122991917-a06094f2e65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=734&q=80" alt="hole in the cement" />
            <a href="https://unsplash.com/it/foto/un-foro-rotondo-nel-cemento-con-una-superficie-blu-EL35AB_PuCQ">Architectural Photography</a>
          </div>
          <div className="search-result">
            <img src="https://images.unsplash.com/photo-1666672800366-4d2c42074ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="a picture in black and white of a building" />
            <a href="https://unsplash.com/it/foto/MYdK-Ux4bd8">Architectural Photography</a>
          </div>
          <div className="search-result">
            <img src="https://images.unsplash.com/photo-1555248585-52225082ad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80" alt="pink and blue cement" />
            <a href="https://unsplash.com/it/foto/e8K4KxYsaVQ">Architectural Photography</a>
          </div>
        </>
      )}
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
