import "./App.css";
import LocationCard from "./components/LocationCard";
import locationApi from "./hooks/locationApi";
import image from "./assets/header2.jpg";
import ResidentInfo from "./components/ResidentInfo";
import { useState } from "react";
import Pagination from './components/Pagination'

function App() {
  const { locat, setIdeLocation } = locationApi(); // Desectructuramos

  const [textId, setTextId] = useState(""); // aca guardo la informacion del input


/* paginacion */
 const [nextPagination, setNextPagination] = useState(1)

 const[perPage, setPorPage] = useState(10)
 
 const maximo = Math.floor(locat?.residents.length / perPage)


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

      {/* Contenedor de las card person */}
      <div className="container-person">
        {locat?.residents.slice(
          (nextPagination - 1) * perPage,
          (nextPagination - 1) * perPage + perPage
        ).map((resident) => (
          <ResidentInfo resident={resident} key={resident} />
        ))}
      </div>
    
     <Pagination nextPagination={nextPagination} setNextPagination={setNextPagination} maximo={maximo}/>
  
    </div>
  );
}

export default App;
