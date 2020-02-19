import React from 'react';
import Result from './Result';

function Results({ results, opepPopup }) {
  return (
    <section className="results">
      {results.map(result => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </section>
  )
}

export default Results