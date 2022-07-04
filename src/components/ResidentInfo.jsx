import React, { useState } from "react";
import characterApi from "../hooks/characterApi";

const ResidentInfo = ({ url }) => {

  const character = characterApi(url);

  const characterStatus = {
    Alive: "green",
    Dead: "red",
    unknown: "purple",
  };

  return (
    <div className="card">
      <div className="card-img-status">
        <img src={character?.image} />
        <div className="status">
          <b>Status:</b>
          <div
            className="status-circle"
            style={{ background: characterStatus[character?.status] }}
          ></div>
        </div>
      </div>
      <ul className="card-info">
        <li className="info-name">{character?.name}</li>
        <li>
          <b className="info-b">Species:</b> {character?.species}
        </li>
        <li>
          <b className="info-b">birthplace:</b> {character?.origin.name}
        </li>
        <li>
          <b className="info-b">Number of episodes:</b>{" "}
          {character?.episode.length}
        </li>
      </ul>
    </div>
  );
};

export default ResidentInfo;
