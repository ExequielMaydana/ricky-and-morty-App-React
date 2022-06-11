import React, { useEffect, useState } from 'react'
import axios from 'axios';

const locationApi = () => {
  
    const [locat, setLocat] = useState()

    const randomLocation = Math.ceil(Math.random() * 126);
    
    const [idLocation, setIdeLocation] = useState(randomLocation)

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
        axios.get(URL)
          .then((res) => setLocat(res.data))
          .catch((err) => console.log(err));

      }, [idLocation]);

  return {locat, setIdeLocation}
}

export default locationApi