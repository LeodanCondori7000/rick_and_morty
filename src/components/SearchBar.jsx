export default function SearchBar(props) {
  
  return (
    <div>
      <input type="search" />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
}

// Este componente nos permitirá buscar y agregar nuevos personajes a nuestra aplicación.

// Recibe por props una función **`onSearch`**. La función **`onSearch`** se debe ejecutar cuando se haga click en el botón **`Agregar`**.
