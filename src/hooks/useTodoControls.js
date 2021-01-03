import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  completeTodo,
  createTodo,
  deleteTodo,
  getTodoList,
  uncompleteTodo,
  updateTodo,
  deleteTodoSuccess,
  precheckTodo,
} from '../redux/todo/actions';

function compare(a, b) {
  if (b.completed_at && !a.completed_at) {
    return -1;
  }
  if (!b.completed_at && a.completed_at) {
    return 1;
  }
  if (b.completed_at && a.completed_at) {
    if (new Date(a.completed_at) < new Date(b.completed_at)) {
      return -1;
    }
    if (new Date(a.completed_at) > new Date(b.completed_at)) {
      return 1;
    }
  }
  if (!b.completed_at && !a.completed_at) {
    if (new Date(a.created_at) > new Date(b.created_at)) {
      return -1;
    }
    if (new Date(a.created_at) < new Date(b.created_at)) {
      return 1;
    }
  }
  return 0;
}

const useTodoControls = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const todoList = useSelector(state => state.Todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort(compare);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    todoInput.trim().length > 0 && dispatch(createTodo(todoInput));
    setTodoInput('');
  };

  const removeTodo = (id) => {
    dispatch(deleteTodoSuccess(id));
    dispatch(deleteTodo(id));
  };

  const checkTodo = (id, checked) => {
    if (!!checked) {
      dispatch(precheckTodo(id, !!checked));
      dispatch(uncompleteTodo(id));
    } else {
      dispatch(precheckTodo(id));
      dispatch(completeTodo(id));
    }
  };

  const editTodo = (id, description) => {
    if (description.trim().length > 0) dispatch(updateTodo(id, description));
    else removeTodo(id);
  };

  return {
    handleSubmit,
    removeTodo,
    checkTodo,
    editTodo,
    todoList: sortedTodoList,
    todoInput,
    setTodoInput
  };
};

export default useTodoControls;