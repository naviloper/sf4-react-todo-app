import React from 'react';
import PropTypes from 'prop-types';
import {SortableContainer} from 'react-sortable-hoc';
import TodosItem from './TodosItem';


const Todos = SortableContainer(({todos, markComplete, deleteTodo}) => {
  return (
    <ul style={ {padding: 0, margin: 0} } >
      {todos.map((todo, index) => (
        <TodosItem 
        key={todo.id} 
        index={index} 
        todo={todo} 
        markComplete={ markComplete }
        deleteTodo={ deleteTodo } 
        />
      ))}
    </ul>
  );
});

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
