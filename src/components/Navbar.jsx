import React from 'react';
import SearchBar from './SearchBar';

export default function Navbar(props) {
  return (
    <nav>
      <SearchBar onSearch={props.onSearch}/>
      <button onClick={props.randomHandler}>Add Random</button>
    </nav>
  )
}
