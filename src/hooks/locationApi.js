import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const locationApi = () => {
  /* en locat guardamos la respuesta de la API y hago el mapeo de los residents en App.jsx, 
  luego le paso como parametro el singular a characterApi, para hacer la segunda peticion.
  */
  const [locat, setLocat] = useState();
  /* Random position de ubicacion entre 1 y 126, la primera y cada vez que se renderice va a tomar una ubicacion random.
   */
  const randomLocation = Math.ceil(Math.random() * 126);

  /* idLocation siempre comienza en una posicion random, luego en setIdLocation paso el textId,
      que es donde viene la id del input. Cambio el estado de idLocation en App.jsx, en la funcion del button whenIPress.
     */
  const [idLocation, setIdeLocation] = useState(randomLocation);

  useEffect(() => {
    if (idLocation >= 1 && idLocation <= 126) {
      const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
      axios
        .get(URL)
        .then((res) => setLocat(res.data))
        .catch((err) => console.log(err));
    } else {
      swal({
        title: "Ups :(",
        text: "¡Las dimensiones van desde 1 hasta 126, intentalo de nuevo!",
        icon: "error",
        button: "Aceptar",
      });
    }
  }, [idLocation]);

  return { locat, setIdeLocation };
};

export default locationApi;
