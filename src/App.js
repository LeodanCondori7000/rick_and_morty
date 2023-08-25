import "./App.css";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  // const onSearch = (id) => {
  //   setCharacters([...characters, example])
  //   // setCharacters(prev => [...prev, example])
  // }

  // function onSearch(id) {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // }

  function onSearch(id) {
    if (characters.find((char) => char.id === Number(id))) {
      alert("It already exists");
      return;
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  // Alternative of implemmenting onSearch
  // function onSearch(id) {
  //   if (characters.find((char) => char.id === Number(id))) {
  //     alert("It already exists");
  //     return;
  //   } else {
  //     axios(`https://rickandmortyapi.com/api/character/${id}`)
  //       .then(({ data }) => {
  //         data.name && setCharacters((oldChars) => [...oldChars, data]);
  //       })
  //       .catch(() => alert("¡No hay personajes con este ID!"));
  //   }
  // }

  const closeHandler = (id) => {
    // const deleted = characters.filter((character) => character.id !== Number(id));
    // setCharacters(deleted)
    // console.log("something");
    let temp = [...characters];
    let temp2 = temp.filter((character) => character.id !== id);
    setCharacters(temp2);
  };

  const randomHandler = () => {
    console.log("random");
    const random = Math.floor(Math.random() * 826) + 1;
    axios(`https://rickandmortyapi.com/api/character/${random}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return (
    <div className="App">
      <h1>random title</h1>
      <Navbar onSearch={onSearch} randomHandler={randomHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
