import React, {useState} from 'react'
import BurgerMenu from '../Burger_Menu/BurgerMenu'
import foto1 from '../img/foto1.jpg';
import foto2 from '../img/foto2.jpg';
import foto3 from '../img/foto3.jpg';
import './Contact.css'
const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerMenuToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
    <BurgerMenu isOpen={isOpen} toggleBurgerMenu={handleBurgerMenuToggle} />
  <div  className={`card-container ${isOpen ? 'menu-open' : ''}`}>
    <div className="card">
      <img src={foto1} alt="Card Image" className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">Владимир Николаевич</h3>
      </div>
    </div>
    <div className="card">
      <img src={foto2} alt="Card Image" className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">Владимир Николаевич</h3>
      </div>
    </div>
    <div className="card">
      <img src={foto3} alt="Card Image" className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">Владимир Николаевич</h3>
      </div>
    </div>
    <div className="card">
      <img src={foto1} alt="Card Image" className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">Владимир Николаевич</h3>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contacts
