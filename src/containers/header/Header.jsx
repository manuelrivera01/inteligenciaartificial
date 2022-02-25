import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const openLink = () => {
    const url = '#wgpt3';
    window.scrollIntoView(url);
  };

  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Inteligencia Artifical</h1>
        <p>
          la inteligencia artificial (AI) es una herramienta que hace posible
          que las máquinas aprendan de la experiencia, se ajusten a distintos
          cambios y realicen tareas similares a las humanas. La AI se está
          utilizando en diferentes industrias, incluidas las finanzas y la
          atención médica.
        </p>

        <div className='gpt3__header-content__input'>
          <button type='button' onClick={() => openLink()}>
            Conoce Más
          </button>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} />
      </div>
    </div>
  );
};
export default Header;
