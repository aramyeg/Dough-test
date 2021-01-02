import React, {useState, useEffect} from 'react';
import {MainLayout} from '../components';
import TodoLists from '../components/common/TodoElementsList';
import AddTodo from '../components/common/AddTodo';
import {
  getTodoList,
  createTodo,
  deleteTodo,
  completeTodo,
  uncompleteTodo,
  updateTodo,
} from '../redux/todo/actions';
import {useDispatch, useSelector} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState('');
  const todoList = useSelector(state => state.Todo.todoList);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    todoInput.length > 0 && dispatch(createTodo(todoInput));
    setTodoInput('');
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const checkTodo = (id, checked) => {
    if (!!checked) dispatch(uncompleteTodo(id));
    else dispatch(completeTodo(id));
  };

  const editTodo = (id, description) => {
    console.log(description)
    dispatch(updateTodo(id, description))
  }

  return (
    <MainLayout>
      <AddTodo handleSubmit={handleSubmit}
               todoInput={todoInput}
               setTodoInput={setTodoInput}
      />

      <TodoLists items={todoList}
                 onItemCheck={(id, checked) => checkTodo(id, checked)}
                 onItemRemove={id => removeTodo(id)}
                 onItemUpdate={(id, description) => editTodo(id, description)}
      />

    </MainLayout>
  );
}

export default App;
