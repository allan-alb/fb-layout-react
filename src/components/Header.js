import React from 'react';
import { AccountCircle } from '@material-ui/icons';

function Header() {

  return (
    <div id="headctangle">
      <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook"/>
      <div>
        <span>Meu perfil</span>
        <AccountCircle style={{ color: '#ffff' }}/>
      </div>
    </div>
  );
}

export default Header;