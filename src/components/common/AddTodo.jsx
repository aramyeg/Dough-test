import React, {memo} from 'react';
import {Input, IconButton} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import styled from 'styled-components';
import useTodoControls from '../../hooks/useTodoControls';

const StyledInput = styled(Input)`
  width: calc(100% - 94px);
  margin-right: 6px;
  color: rgba(235, 87, 87, 1);
  font-weight: 500;
  font-size: 16px;
  
  &::after {
    border-color: rgba(235, 87, 87, 1);
  }
  
  & ::placeholder { 
    color: #EB5757;
    opacity: 1; 
  }
`;

const AddTodo = () => {
  const {
    handleSubmit,
    todoInput,
    setTodoInput,
  } = useTodoControls();

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput placeholder={'Add to list...'}
                   onChange={(ev) => {
                     setTodoInput(ev.target.value);
                   }}
                   value={todoInput}
                   startAdornment={
                     <IconButton style={{color: '#EB5757'}}
                                 onClick={handleSubmit}>
                       <Add/>
                     </IconButton>
                   }
      />
    </form>
  );
};

export default memo(AddTodo);