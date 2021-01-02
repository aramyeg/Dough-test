import React from 'react';
import Header from '../Header';
import {Container, Paper} from '@material-ui/core';
import {StylesProvider} from '@material-ui/core/styles';
import "./MainLayout.css"

const MainLayout = ({children, ...props}) => {
  return(
    <StylesProvider injectFirst>
      <Header />
      <Container className="MainLayout__Container" maxWidth="lg">
        {children}
      </Container>
    </StylesProvider>
  )
};

export default MainLayout