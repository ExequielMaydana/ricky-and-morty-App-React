import "./App.css";
import LocationCard from "./components/LocationCard";
import locationApi from "./hooks/locationApi";
import image from "./assets/header2.jpg";
import ResidentInfo from "./components/ResidentInfo";
import { useState } from "react";

function App() {
  const { locat, setIdeLocation } = locationApi(); // Desectructuramos
  
  const [textId, setTextId] = useState(""); // aca guardo la informacion del input

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
        {locat?.residents.map((resident) => (
          <ResidentInfo resident={resident} key={resident} />
        ))}
      </div>
    </div>
  );
}

export default App;
