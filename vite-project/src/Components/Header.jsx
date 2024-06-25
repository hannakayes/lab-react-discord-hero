// src/components/Header.jsx
import React from 'react';
import discordLogo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';

function Header() {
  return (
    <header>
      <img src={discordLogo} alt="Discord Logo" />
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
    </header>
  );
}

export default Header;
