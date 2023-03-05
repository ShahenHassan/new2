import React from 'react';


import "./card.css";

export const Cards = ({flags,continents,name}) => {
  return (
    <div className="cardd">
      <img src={flags.png} alt="mm" />
      <h4>{continents}</h4>

      <p>{name.common}</p>
    </div>
  );
}
