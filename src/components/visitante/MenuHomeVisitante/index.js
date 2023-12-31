import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { hotjar } from "react-hotjar";

import logo from "../../../assets/icones/logo-removebg-preview 1.png";
import BarraAcessibilidade from "../../barraAcessibilidade";

import "../../../styleGlobal.css";
import "./index.css";

const Menu = () => {
  useEffect(() => {
    hotjar.initialize(3738750, 6);
  }, []);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuButtonClass = `menu-icon ${isMobileMenuOpen ? 'open' : ''}`;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  }, []);

  return (
    <div className={`menuHome ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <BarraAcessibilidade />
      <div className="desktop-menuHome">
        <ul>
        <li className="main-menu-item"><Link to="/portfolio">Portfólio</Link></li>
            <li className="main-menu-item"><Link to="/contato">Contato</Link></li>
        </ul>
        <Link to="/"><img src={logo} alt="Logo do projeto com o nome ThINK" /></Link>
        <ul>
            <li className="main-menu-item"><Link to="/signin">Login</Link></li>
            <li className="main-menu-item"><Link to="/signup">Cadastro</Link></li>
        </ul>
      </div>

      <div className="mobileHome-menu">
        <button className={mobileMenuButtonClass}  onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMobileMenuOpen && (
          <ul className="mobileHome-menu-list">
            <li className="main-menu-item"><Link to="/portfolio">Portfólio</Link></li>
            <li className="main-menu-item"><Link to="/contato">Contato</Link></li>
            <li className="main-menu-item"><Link to="/signin">Login</Link></li>
            <li className="main-menu-item"><Link to="/signup">Cadastro</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
