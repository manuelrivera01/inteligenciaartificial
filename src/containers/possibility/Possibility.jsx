import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className='gpt3__possibility section__padding' id='possibility'>
    <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt='possibility' />
    </div>
    <div className='gpt3__possibility-content'>
      <h4>Realidad Virtual</h4>
      <h1 className='gradient__text'>
        Las posibilidades van más <br /> allá de tu imaginación
      </h1>
      <p>
        La Realidad Virtual (RV) es un entorno de escenas y objetos de
        apariencia real generado mediante tecnología informática que crea en el
        usuario la sensación de estar inmerso en él. Dicho entorno se contempla
        a través de un dispositivo conocido como gafas o casco de Realidad
        Virtual.
      </p>
    </div>
  </div>
);

export default Possibility;
