import React from 'react';
import Search from './Components/Search';

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=2e5834b0";

  return (
    <div className="App">
      <header>
        <h1>Movie DataBase</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;