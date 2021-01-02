import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  GET_TODO_LIST_SUCCESS,
  CREATE_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  UNCOMPLETE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS
} from './actions';

const initialState = {
  todoList: [],
  error: null,
  loading: false,
};

function todoReducer(state = initialState, action) {
  const replaceElement = () => {
    const shallowTodoList = [...state.todoList];
    const index = shallowTodoList.findIndex((el) => (
      el.id === action.payload.id
    ));
    shallowTodoList[index] = action.payload;
    return shallowTodoList;
  };
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todoList: [...action.payload],
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todoList: [...state.todoList, action.payload],
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todoList: replaceElement(),
      };
    case UNCOMPLETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todoList: replaceElement(),
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todoList: replaceElement(),
      };
    default:
      return state;
  }
}

export default todoReducer;