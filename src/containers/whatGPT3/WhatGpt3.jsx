import React from "react";
import "./whatgpt3.css";
import Feature from "../../components/feature/Feature";

const WhatGpt3 = () => (
  <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
      <Feature
        title='Inteligencia Artificial'
        text='La inteligencia artificial es una nueva forma de resolver problemas dentro de los cuales se incluyen los sistemas expertos, el manejo y control de robots y los procesadores, que intenta integrar el conocimiento en tales sistemas, en otras palabras, un sistema inteligente capaz de escribir su propio programa'
      />
    </div>
    <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>
        Las posibilidades están más allá de tu imaginación.
      </h1>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature
        title='Chatbots'
        text='Son aplicaciones software simulan mantener una conversación con una persona al proveer respuestas automáticas, las cuales son previamente establecidas por un conjunto de expertos a entradas realizadas por el usuario. '
      />
      <Feature
        title='Base de conocimiento'
        text='iene como objetivo capturar el conocimiento experto humano para respaldar la toma de decisiones, la resolución de problemas y más.'
      />
      <Feature
        title='Educación'
        text='La IA ayuda a los estudiantes a aprender mejor y más rápido cuando se combina con materiales de aprendizaje e instrucción de alta calidad.'
      />
    </div>
  </div>
);

export default WhatGpt3;
