import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <a href='#home'>
          {" "}
          <img src={gpt3Logo} alt='gpt3_logo' />
        </a>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>
          <a href='#home'>Inicio</a>
        </p>
        <p>
          <a href='#wgpt3'>¿Qué es IA?</a>
        </p>
        <p>
          <a href='#features'>Características</a>
        </p>
        <p>
          <a href='#possibility'>Realidad Virtual</a>
        </p>
        <p>
          <a href='#blog'>Blog</a>
        </p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Demos</h4>
        <p>
          <a href='https://www.youtube.com/watch?v=8V20HkoiNtc' target='_blank'>
            GPT-3 Demo
          </a>
        </p>
        <p>
          <a href='https://www.youtube.com/watch?v=Sq36J9pNaEo' target='_blank'>
            AI Robot
          </a>
        </p>
        <p>
          <a
            href='#https://www.youtube.com/watch?v=SGUCcjHTmGY&t=1084s'
            target='_blank'
          >
            OpenAI Codex
          </a>
        </p>
      </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p>@2022</p>
    </div>
  </div>
);

export default Footer;
