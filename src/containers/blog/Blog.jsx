import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>
        Noticias recientes sobre Inteligencia Artificial.
      </h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupB'>
        <Article
          imgUrl={blog01}
          date='Febrero 07, 2022'
          text='La Inteligencia Artificial de Google que dice ser tan eficiente como un programador promedio'
          url='https://www.enter.co/chips-bits/apps-software/la-inteligencia-artificial-de-google-que-dice-ser-tan-eficiente-como-un-programador-promedio/'
        />
        <Article
          imgUrl={blog02}
          date='Febrero 07, 2022'
          text='DeepMind desarrolla un sistema de inteligencia artificial capaz de programar de forma creativa'
          url='https://elpais.com/tecnologia/2022-02-03/deepmind-desarrolla-un-sistema-de-inteligencia-artificial-capaz-de-programar-de-forma-creativa.html'
        />
        <Article
          imgUrl={blog04}
          date='Febrero 07, 2022'
          text='La mayoría de las empresas prevé incorporar inteligencia artificial en sus procesos'
          url='https://www.telam.com.ar/notas/202202/582853-empresas-inteligencia-artificial.html'
        />
        <Article
          imgUrl={blog05}
          date='Febrero 07, 2022'
          text='Inteligencia artificial para conceder créditos a los desfavorecidos'
          url='https://elpais.com/planeta-futuro/red-de-expertos/2022-02-07/inteligencia-artificial-para-conceder-creditos-a-los-desfavorecidos.html'
        />

        <Article
          imgUrl={blog03}
          date='Enero 26, 2022'
          text='¿Hacia dónde avanza la inteligencia artificial?'
          url='https://www.elperiodico.com/es/entre-todos/20220124/avance-inteligencia-artificial-entender-13129991'
        />
      </div>
    </div>
  </div>
);

export default Blog;
