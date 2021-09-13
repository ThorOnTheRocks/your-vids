import React, { useState } from 'react';

const SearchBar = ({ onQuerySubmit }) => {
  const [term, setTerm] = useState('Type your search...');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onQuerySubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onClick={() => setTerm('')}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;