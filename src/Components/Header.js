
import React from 'react';
import DateTime from './DateTime';
import image from './../assets/searchImage.svg';

const Header = () => (
  <div className="header">
    <h1 className="headerTitle">forecast App</h1>
    <div className="headerTitleContainer">
    <DateTime />
    <img src={image} alt="image" />
    </div>
  </div>
);

export default Header;