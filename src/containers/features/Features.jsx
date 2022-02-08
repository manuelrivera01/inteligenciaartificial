import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Aprendizaje profundo",
    text: "Es un conjunto de algoritmos de aprendizaje automático que intenta modelar abstracciones de alto nivel en datos usando arquitecturas computacionales que admiten transformaciones no lineales múltiples e iterativas de datos expresados en forma matricial o tensorial.",
  },
  {
    title: "Reconocimiento Facial",
    text: "Es una tecnología capaz de identificar o verificar a un sujeto a través de una imagen, vídeo o cualquier elemento audiovisual de su rostro.",
  },
  {
    title: "Computación cuántica",
    text: "La IA está ayudando a resolver problemas complejos de física cuántica con la precisión de las supercomputadoras con la ayuda de redes neuronales cuánticas.",
  },
  {
    title: "Computación en la nube",
    text: "La siguiente característica de la Inteligencia Artificial es la Computación en la Nube. Con una cantidad tan grande de datos que se producen todos los días, el almacenamiento de datos en forma física habría sido un gran problema.",
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        El futuro es ahora y solo necesitas darte cuenta. Da un paso hacia el
        futuro hoy.
      </h1>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
