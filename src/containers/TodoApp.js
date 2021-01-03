import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import TodoElementsList from '../components/common/TodoElementsList';
import AddTodo from '../components/common/AddTodo';

function TodoApp() {
  return (
    <MainLayout>
      <AddTodo/>
      <TodoElementsList/>
    </MainLayout>
  );
}

export default TodoApp;
