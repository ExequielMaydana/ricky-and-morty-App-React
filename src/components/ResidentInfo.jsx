import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentInfo = ({ resident }) => {
  
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="card">
        <img src={character?.image} />
        <ul className="card-info">
          <li className="info-name">{character?.name}</li>
          <li className="info-"><b>Status:</b> {character?.status}</li>
          <li><b>Species:</b> {character?.species}</li>
          <li><b>birthplace:</b> {character?.origin.name}</li>
          <li><b>Number of episodes:</b> {character?.episode.length}</li>
        </ul>
      </div>
  );
};

export default ResidentInfo;
