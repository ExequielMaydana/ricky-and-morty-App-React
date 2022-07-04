import "./App.css";
import LocationCard from "./components/LocationCard";
import locationApi from "./hooks/locationApi";
import image from "./assets/header2.jpg";
import ResidentInfo from "./components/ResidentInfo";
import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const { locat, setIdeLocation } = locationApi(); // Desectructuramos

  const [textId, setTextId] = useState(""); // aca guardo la informacion del input

  /* paginacion */
  const [currentPage, setCurrentPage] = useState(1);

  let arrayResidents = []; //esto es para guardar los elementos que se muestran en pantalla.
  const residentPerPage = 6; //cuantos personajes quiero que se vean por pagina.

  if (locat?.residents.length < residentPerPage) {
    // aca preguntamos: si la cantidad de residentes que tiene esa location es menor que residentPerPage, se copien dentro del array
    arrayResidents = [...locat?.residents];
  } else {
    const lastResident = currentPage * residentPerPage;
    arrayResidents = locat?.residents.slice(
      lastResident - residentPerPage,
      lastResident
    );
  }

  let arrayPages = [];
  let quantityPages = Math.ceil(locat?.residents.length / residentPerPage); //cantidad de paginas maxima
  const pagesPerBlock = 5; //cantidad de paginas por bloque
  let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

  // analiza si estamos en el ultimo bloque(true) o no (false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // este if analiza si me paso de la cantidad de paginas.
    //cuando es el ultimo bloque
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
    //cuando no es el ultimo bloque
  } else {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }

  console.log(arrayPages);

  // Hice este if para que al apretar ENTER tambien busque la ID
  const whenIPress = (e) => {
    if (e.key) {
      if (e.key === "Enter") {
        setIdeLocation(textId);
      }
    } else if (e.type) {
      if (e.type === "click") {
        setIdeLocation(textId);
      }
    }
  };

  return (
    <div className="App">
      {/* la imagen del header */}
      <header className="image-header">
        <img src={image} />
      </header>

      {/* Card location */}
      <LocationCard locat={locat} />

      {/* Input */}
      <div className="container-input">
        <input
          type="number"
          onChange={(e) => setTextId(e.target.value)}
          onKeyUp={(e) => whenIPress(e)}
          placeholder="Type a location ID"
        ></input>
        <button onClick={whenIPress}>Search</button>
      </div>
      {locat?.residents.length > 6 ? (
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      ) : null}

      {/* Contenedor de las card person */}
      <div className="container-person">
        {arrayResidents?.map((url) => (
          <ResidentInfo key={url} url={url} />
        ))}
      </div>
      {locat?.residents.length > 6  ? (
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      ) : null}
    </div>
  );
}

export default App;
