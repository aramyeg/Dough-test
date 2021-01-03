import React, {memo, useState, useEffect, useRef} from 'react';
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  Input,
} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';
import useOutsideClick from '../../hooks/useOutsideClick';
import styled from 'styled-components';
import useTodoControls from '../../hooks/useTodoControls';

const LineInput = styled(Input)`
    flex: auto;
    width: 100%;
    padding-top: 4px;
    
    &::after {
      border-color: rgba(235, 87, 87, 1);
    }
`;

const StyledListItemText = styled(ListItemText)`
    padding-top: 4px;
    font-size: 16px;
    text-decoration: ${props => props.checked && "line-through"};
    color: ${props => props.checked && "#828282"};
`;

const LineForm = styled.form`
    flex: auto;
    margin-right: 15px;
`;

const StyledListItem = styled(ListItem)`
    align-items: flex-start;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
`;

const TodoListItem = ({id, description = '', checked = false}) => {
  const descriptionRef = useRef(description);
  const [hover, setHover] = useState(window.innerWidth <= 768);
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(description);
  const {
    checkTodo,
    removeTodo,
    editTodo
  } = useTodoControls();
  const textInput = useOutsideClick(editMode, () => {
    setEditMode(false);
  });

  useEffect(() => {
    const resizeListener = () => {
      setHover(window.innerWidth <= 768);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useEffect(() => {
    if (inputText !== descriptionRef.current) {
      descriptionRef.current = inputText;
      editTodo(id, inputText);
    } else {
      descriptionRef.current = inputText;
    }
  }, [editMode]);

  return (
    <StyledListItem divider={false}
                    onMouseEnter={e => {
                      setHover(true);
                    }}
                    onMouseLeave={e => {
                      window.innerWidth > 768 &&
                      setHover(false);
                    }}>
      <Checkbox
        onClick={()=>checkTodo(id, checked)}
        checked={!!checked}
      />
      {
        editMode ?
          <LineForm onSubmit={(e) => {
            e.preventDefault();
            setEditMode(false);
          }}>
            <LineInput value={inputText}
                       ref={textInput}
                       onChange={(ev) => setInputText(ev.target.value)}/>
          </LineForm>
          :
          <StyledListItemText onClick={() => {
                                setEditMode(true);
                              }}
                              checked={!!checked}
                              primary={inputText}/>
      }
      {
        hover &&
        <IconButton aria-label="Delete Todo" onClick={()=>removeTodo(id)}>
          <DeleteOutlined/>
        </IconButton>
      }
    </StyledListItem>
  );
};

export default memo(TodoListItem);