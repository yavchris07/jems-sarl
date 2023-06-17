// import React from 'react';
import BannerShort from '../components/banner-short';
import '../styles/contact.scss';
// import icon from '../assets/icons/icon-yellow.png';
import icon2 from '../assets/icons/icon-white.png';


function Contact() {
  return (
    <div className='contact'>
      <BannerShort title='Contactez-nous'/>
      <div className='body'>
        {/* <div className='icons'>
          <img src={icon } alt="icon" />
        </div> */}
        <h1>POUR PLUS D'INFORMATIONS</h1>
        <div className='adress-phyz'>
          <h4>Notre adresse physique</h4>
          <p>
            Le Siège Social est fixé au 06 de l’avenue MUHETA, 
            Golf Plateau, Commune Annexe, Ville  de Lubumbashi en
            République Démocratique du Congo.
          </p>
        </div>
        <br />
        <div className='adress-elec'>
          <h4>Nos adresses electroniques</h4>
          <p>contact@jems-sarl.com</p>
          <p>infos@jems-sarl.com</p>
          <p>nous@jems-sarl.com</p>
        </div>
        <br />
        <div className='adress-tel'>
          <h4>Nos adresses telephoniques</h4>
          <p> <span>☏</span>  +243 997 784 456</p>
          <p> <span>☎</span> +243 997 784 456</p>
          <p> <span>☏</span> +243 997 784 456</p> 
        </div>
        <br />
        <div className='icons1'>
          <img src={icon2} alt="icon2" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
