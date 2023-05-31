import React, { useState } from 'react';
import './BurgerMenu.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='burger-obol'>
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-items">
        <li>
          <Link to='/*' className="menu-item">Главная</Link>
        </li>
        <li>
        <Link to='/about' className="menu-item">О нас</Link>
        </li>
        <li>
        <Link to='/tures' className="menu-item">Тури</Link>
        </li>
        <li>
        <Link to='/contacts' className="menu-item">Консультанты</Link>

        </li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default BurgerMenu;
