import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';

const Header = ({children, ...props}) => {

  return(
    <AppBar position="static">
      <Toolbar>
        <span color="inherit" >
          TinyList
        </span>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default Header;