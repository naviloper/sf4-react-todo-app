import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SortableElement} from 'react-sortable-hoc';

const TodosItem = SortableElement(({todo, markComplete, deleteTodo}) => {

  const { id, title, completed } = todo;

  const getItemStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      backgroundColor: "#f4f4f4",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      listStyle: 'none'
    }
  }

  return (
    <li style={ getItemStyle() }>
      <p>
        <input type="checkbox" onChange={ markComplete.bind(this, id) } defaultChecked={ completed } />{' '}
        {title}
        <button style={ deleteStyle } onClick={ deleteTodo.bind(this, id) }>X</button>
      </p>
    </li>
  );
});

const deleteStyle = {
  cursor: 'pointer',
  float: 'right',
  borderRadius: '50%'
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodosItem
