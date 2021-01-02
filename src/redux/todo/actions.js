import {
  createTodoService,
  getTodoListService,
  deleteTodoService,
  completeTodoService,
  uncompleteTodoService,
  updateTodoService
} from '../../services/todoServices';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const GET_TODO_LIST_SUCCESS = 'GET_TODO_LIST_SUCCESS';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';
export const UNCOMPLETE_TODO_SUCCESS = 'UNCOMPLETE_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';

const requestStarted = () => ({
  type: REQUEST_STARTED
});

const requestFailed = error => ({
  type: REQUEST_FAILED,
  payload: {
    error
  }
});

const getTodoListSuccess = todoList => ({
  type: GET_TODO_LIST_SUCCESS,
  payload: [
    ...todoList
  ]
});

export const getTodoList = () => {
  return dispatch => {
    dispatch(requestStarted());
    getTodoListService()
      .then(data => {
        dispatch(getTodoListSuccess(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};

export const createTodoSuccess = todo => ({
  type: CREATE_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

export const createTodo = (description) => {
  return dispatch => {
    dispatch(requestStarted());
    createTodoService(description)
      .then(data => {
        dispatch(createTodoSuccess(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};

export const deleteTodo = (id) => {
  return dispatch => {
    dispatch(requestStarted());
    deleteTodoService(id)
      .then(data => {
        dispatch(getTodoList(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};

export const completeTodoSuccess = todo => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

export const completeTodo = (id) => {
  return dispatch => {
    dispatch(requestStarted());
    completeTodoService(id)
      .then(data => {
        dispatch(completeTodoSuccess(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};

export const uncompleteTodoSuccess = todo => ({
  type: UNCOMPLETE_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

export const uncompleteTodo = (id) => {
  return dispatch => {
    dispatch(requestStarted());
    uncompleteTodoService(id)
      .then(data => {
        dispatch(uncompleteTodoSuccess(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};

export const updateTodoSuccess = todo => ({
  type: UPDATE_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

export const updateTodo = (id, description) => {
  return dispatch => {
    dispatch(requestStarted());
    updateTodoService(id, description)
      .then(data => {
        dispatch(updateTodoSuccess(data));
      })
      .catch(err => {
        dispatch(requestFailed(err.message));
      });
  };
};


