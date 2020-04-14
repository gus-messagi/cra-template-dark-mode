import React from 'react';
import Switch from '../../atoms/AppSwitch';
import './Header.scss';

function Header() {
  return(
    <header>
      <div className="header-div">
        <div>
          <span>Theme switcher template for react</span>
        </div>
        <div>
          <Switch />
        </div>  
      </div>
    </header>
  );
}

export default Header;