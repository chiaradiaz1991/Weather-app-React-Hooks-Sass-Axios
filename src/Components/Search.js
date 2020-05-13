import React, { useContext } from 'react';
import Context from '../context';

const Search = () => {

  const { apiCall } = useContext(Context);
  return (
    <div className="search">
      <form onSubmit={apiCall} className="searchForm">
        <input name="location" autoComplete="off" className="searchInput" type="text" />
        <div className="searchSubmit">
          <button className="searchButton">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;