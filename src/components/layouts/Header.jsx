import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import styled from 'styled-components';

const Logo = styled.span`
  font-weight: 800;
  font-size: 20;  
`;

const StyledAppBar = styled(AppBar)`
  background-color: #EB5757;
  height: 56px;
  display: flex;
  justify-content: center;
  
  & .MuiToolbar-regular{
    @media (min-width: 360px){
      min-height: 56px; 
    }
  }
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Header = ({children, ...props}) => {

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo color="inherit">
          TinyList
        </Logo>
        {children}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;