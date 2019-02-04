import React, { Component } from 'react';

const Search = (props) => {
    return ( 
        <div className="form">
        <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input type='text' name='recipeName' placeholder='Search..' />
        <button className="form__button">Search</button>
    </form>
    </div>
     );
}
 
export default Search;