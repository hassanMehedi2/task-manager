// src/components/SideBar/SideBar.jsx
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../styles/BurgerMenu.css'

const BurgerMenu = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a className="menu-item" href="/settings">Settings</a>
    </Menu>
  );
};

export default BurgerMenu;