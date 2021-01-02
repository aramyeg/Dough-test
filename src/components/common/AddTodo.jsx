import React, {memo} from 'react';
import {Input, IconButton} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const AddTodo = ({handleSubmit, todoInput, setTodoInput}) => {

  return(
    <form onSubmit={handleSubmit}>
      <Input placeholder={"Add to list..."}
             onChange={(ev)=>{setTodoInput(ev.target.value)}}
             value={todoInput}
             startAdornment={
               <IconButton onClick={handleSubmit}>
                 <Add />
               </IconButton>
             }
      />
    </form>
  )
};

export default memo(AddTodo);