import React, {memo, useState, useEffect, useRef} from 'react';
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Input,
} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';
import useOutsideClick from '../../hooks/useOutsideClick';
import styled from 'styled-components';

const LineInput = styled(Input)`
    flex: auto;
    margin-right: 15px;
`;

const TodoListItem = ({description = '', checked = false, onButtonClick, onCheckBoxToggle, onItemEdit}) => {
  const descriptionRef = useRef(description);
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(description);
  const textInput = useOutsideClick(editMode, () => {
    setEditMode(false);
  });

  useEffect(() => {
    if (inputText !== descriptionRef.current) {
      descriptionRef.current = inputText;
      onItemEdit(inputText);
    } else {
      descriptionRef.current = inputText;
    }
  }, [editMode]);

  return (
    <ListItem divider={false}>
      <Checkbox
        onClick={onCheckBoxToggle}
        checked={!!checked}
      />
      {
        editMode ?
          <LineInput value={inputText}
                 ref={textInput}
                 onChange={(ev) => setInputText(ev.target.value)}/>
          :
          <ListItemText onClick={() => {
            setEditMode(true);
          }}
                        primary={inputText}/>
      }
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default memo(TodoListItem);