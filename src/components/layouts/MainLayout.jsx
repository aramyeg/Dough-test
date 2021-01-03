import React from 'react';
import Header from './Header';
import {Container} from '@material-ui/core';
import {StylesProvider} from '@material-ui/core/styles';
import styled from 'styled-components';

const StyledWrapper = styled(Container)`
  text-align: center;
  margin: 0;
  padding: 0;
  min-width: 360px;
`;

const InnerContainer = styled(Container)`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-width: calc(50% + 100px);
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MainLayout = ({children, ...props}) => {
  return (
    <StylesProvider injectFirst>
      <StyledWrapper maxWidth={false}>
        <Header/>
        <InnerContainer>
          {children}
        </InnerContainer>
      </StyledWrapper>
    </StylesProvider>
  );
};

export default MainLayout;