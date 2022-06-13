import React, { useState } from "react";
import characterApi from "../hooks/characterApi";

const ResidentInfo = ({resident}) => {

const character = characterApi(resident)

  return (
      <div className="card">
        <img src={character?.image} />
        <ul className="card-info">
          <li className="info-name">{character?.name}</li>
          <li><b className="info-b">Status:</b> {character?.status}</li>
          <li><b className="info-b">Species:</b> {character?.species}</li>
          <li><b className="info-b">birthplace:</b> {character?.origin.name}</li>
          <li><b className="info-b">Number of episodes:</b> {character?.episode.length}</li>
        </ul>
      </div>
  );
};

export default ResidentInfo;
