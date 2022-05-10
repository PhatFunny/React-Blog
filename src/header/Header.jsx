import React from 'react';
import '../header/header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://www.cosmeticsdesign-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-asia.com/headlines/formulation-science/natural-and-organic-beauty-one-of-the-key-drivers-of-indonesia-s-personal-care-market/9440813-1-eng-GB/Natural-and-organic-beauty-one-of-the-key-drivers-of-Indonesia-s-personal-care-market.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  )
}
