import React, {useState} from 'react';
import BurgerMenu from '../Burger_Menu/BurgerMenu';
import tur1 from '../img/tur1.jpg';
import tur3 from '../img/tur3.jpg';
import tur4 from '../img/tur4.jpg';
import tur2 from '../img/tur2.jpeg';


import './Toures.css';

const Toures = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerMenuToggle = () => {
      setIsOpen(!isOpen);
    };
  return (<>
    <div>
        <BurgerMenu isOpen={isOpen} toggleBurgerMenu={handleBurgerMenuToggle} />
      <div  className={`card-container ${isOpen ? 'menu-open' : ''}`}>
        <div className="card">
          <img src={tur1} alt="Card Image" className="card-image" />
          <div className="card-overlay">
            <h3 className="card-title">Токио</h3>
          </div>
        </div>
        <div className="card">
          <img src={tur2} alt="Card Image" className="card-image" />
          <div className="card-overlay">
            <h3 className="card-title">Париж</h3>
          </div>
        </div>
        <div className="card">
          <img src={tur3} alt="Card Image" className="card-image" />
          <div className="card-overlay">
            <h3 className="card-title">Китай</h3>
          </div>
        </div>
        <div className="card">
          <img src={tur4} alt="Card Image" className="card-image" />
          <div className="card-overlay">
            <h3 className="card-title">Будапешт</h3>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Toures;
