import React from "react";
import "./cta.css";

const Cta = () => {
  const openLink = () => {
    const url = "https://www.youtube.com/watch?v=8V20HkoiNtc";
    window.open(url, "_blank");
  };

  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <h3>
          Mira cómo la Inteligencia Artificial está cambiando la forma de
          programar
        </h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button' onClick={() => openLink()}>
          Ver Demo
        </button>
      </div>
    </div>
  );
};

export default Cta;
