import React from 'react';

const SearchForm = props => (
    <div>
        <input type="text" onChange={props.handleChange} />
        <button onClick={props.onClick}>
            Search
        </button>
    </div>
);

export default SearchForm;
