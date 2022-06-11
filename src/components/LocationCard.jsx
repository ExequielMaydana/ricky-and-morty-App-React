import React from "react";

const LocationCard = ({locat}) => {
  
  return (
    <div className="container-data">
    <div className="container-card-data">
      <h2>{locat?.name}</h2>
      <div className="card-text">
        <p className="text1"><b>Type:</b> {locat?.type}</p>
        <p className="text2"><b>Dimension:</b> {locat?.dimension}</p>
        <p className="text3"><b>Population:</b> {locat?.residents.length}</p>
      </div>
    </div>
    </div>
  );
};

export default LocationCard;
