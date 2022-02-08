import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openLink = () => {
    const url = "https://www.youtube.com/watch?v=8V20HkoiNtc";
    window.open(url, "_blank");
  };

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
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
      </div>
      <div className='gpt3__navbar-sign'>
        <button type='button' onClick={() => openLink()}>
          Ver Demo
        </button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <p>
                <a href='#home' onClick={() => setToggleMenu(false)}>
                  Inicio
                </a>
              </p>
              <p>
                <a href='#wgpt3' onClick={() => setToggleMenu(false)}>
                  ¿Qué es IA?
                </a>
              </p>
              <p>
                <a href='#features' onClick={() => setToggleMenu(false)}>
                  Características
                </a>
              </p>
              <p>
                <a href='#possibility' onClick={() => setToggleMenu(false)}>
                  Realidad Virtual
                </a>
              </p>
              <p>
                <a href='#blog' onClick={() => setToggleMenu(false)}>
                  Blog
                </a>
              </p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <button type='button' onClick={() => openLink()}>
                Ver Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
