import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    e.preventDefault(); // no siempre es necesaria
    // setId(e.target.value);
    setId(prev => e.target.value);
  };
  
  function handleSearch () {
    props.onSearch(id);
    setId(prev => "");
  }
  return (
    <div>
      <input type="search" value={id} onChange={handleChange}/>
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
