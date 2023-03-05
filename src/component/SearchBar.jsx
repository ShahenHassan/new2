import React from "react";
import "./searchBar.css";
const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <input
        type="text"
        className="searchInput"
        placeholder="enter country to search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
