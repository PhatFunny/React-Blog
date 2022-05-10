import React from 'react';
import '../topbar/topbar.css';

export default function TopBar() {
  return (
    <>
      <div className='top'>
        <div className='topLeft'>
          <i className="topIcon fa-brands fa-facebook-square" />
          <i className="topIcon fa-brands fa-twitter" />
          <i className="topIcon fa-brands fa-pinterest" />
          <i className="topIcon fa-brands fa-instagram-square" />
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOG OUT</li>
          </ul>
        </div>
        <div className='topRight'>
          <img className='topImg' src='https://www.cosmeticsdesign-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-asia.com/headlines/formulation-science/natural-and-organic-beauty-one-of-the-key-drivers-of-indonesia-s-personal-care-market/9440813-1-eng-GB/Natural-and-organic-beauty-one-of-the-key-drivers-of-Indonesia-s-personal-care-market.jpg' alt=''></img>
          <i className="topSearch fa-solid fa-magnifying-glass" />
        </div>
      </div>
      </>
  )
}
