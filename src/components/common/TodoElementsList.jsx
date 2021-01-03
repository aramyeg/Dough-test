import React, {createRef, memo,} from 'react';
import {LinearProgress, List, Paper} from '@material-ui/core';
import TodoListItem from './TodoListItem';
import SlidingArrayItems from '../../containers/SlidingArrayItems';
import useTodoControls from '../../hooks/useTodoControls';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const StyledProgress = styled(LinearProgress)`
  & .MuiLinearProgress-barColorPrimary{
    background-color: rgba(235, 87, 87, 1);
  }
  background-color: rgba(235, 87, 87, 0.4);
`;

const TodoElementsList = () => {
  const loading = useSelector(state => state.Todo.loading);
  const {
    todoList,
  } = useTodoControls();

  return (
    <Paper elevation={0} style={{margin: 16}}>
      {loading && <StyledProgress/>}
      <List style={{overflow: 'scroll'}}>
        <SlidingArrayItems>
          {todoList?.map((todo) => (
            <TodoListItem
              ref={createRef()}
              key={`TodoItem.${todo.id}`}
              id={todo.id}
              description={todo.description}
              checked={todo.completed_at}
            />
          ))}
        </SlidingArrayItems>
      </List>
    </Paper>
  );
};

export default memo(TodoElementsList);