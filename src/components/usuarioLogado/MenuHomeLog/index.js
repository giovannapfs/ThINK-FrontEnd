import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

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

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    navigate('/');
    window.location.reload();
}


  return (
    <div className={`menuHome ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <BarraAcessibilidade />
      <div className="desktop-menuHome">
        <ul>
          <li className="main-menu-item"><Link to="/portfolio">Portfólio</Link></li>
          <li className="main-menu-item"><Link to="/flashtattoo">Flash tattoo</Link></li>
          <li className="main-menu-item"><Link to="/agenda">Agenda</Link></li>
        </ul>
        <Link to="/"><img src={logo} alt="Logo do projeto com o nome ThINK" /></Link>
        <ul>
          <li className="main-menu-item"><Link to="/signin">Login</Link></li>
          <li className="main-menu-item"><Link to="/contato">Contato</Link></li>
          <li className="main-submenu-item" onClick={toggleSubMenu}><Link to="">
            Meu perfil</Link>
            {isSubMenuOpen && (
              <ul className="sub-menuHome">
                <li className="sub-menu-item"><Link to="/perfil/informacoes">Minhas informações</Link></li>
                <li className="sub-menu-item"><Link to="/perfil/agendamentos">Meus agendamentos</Link></li>
                <li><button>Excluir conta</button></li>
                <li onClick={handleLogout}><button>Sair</button></li>
              </ul>
            )}
          </li>
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
            <li className="main-menu-item"><Link to="/flashtattoo">Flash tattoo</Link></li>
            <li className="main-menu-item"><Link to="/agenda">Agenda</Link></li>
            <li className="main-menu-item"><Link to="/login">Login</Link></li>
            <li className="main-menu-item"><Link to="/contato">Contato</Link></li>
            <br></br>
            <li className="main-menu-item">Meu perfil
              <ul className="sub-menuHome">
                <li><Link to="/perfil/informacoes">Minhas informações</Link></li>
                <li><Link to="/perfil/agendamentos">Meus agendamentos</Link></li>
                <li>Excluir conta</li>
                <li onClick={handleLogout}><button>Sair</button></li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
