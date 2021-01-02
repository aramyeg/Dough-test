import React, {memo} from 'react';
import {List, Paper} from '@material-ui/core';
import TodoListItem from './TodoListItem';

const TodoElementsList = ({items, onItemRemove, onItemCheck, onItemUpdate}) => (
  <>
    {items.length > 0 && (
      <Paper elevation={0} style={{margin: 16}}>
        <List style={{overflow: 'scroll'}}>
          {items.map((todo) => (
            <TodoListItem
              key={`TodoItem.${todo.id}`}
              description={todo.description}
              checked={todo.completed_at}
              onButtonClick={() => onItemRemove(todo.id)}
              onCheckBoxToggle={() => onItemCheck(todo.id, !!todo.completed_at)}
              onItemEdit={(text) => onItemUpdate(todo.id, text)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
);

export default memo(TodoElementsList);