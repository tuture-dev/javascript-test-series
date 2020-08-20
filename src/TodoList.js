import React from 'react';

const ToDoList = (props) => {
  return (
    <ul>
      {props.tasks.map((taskName, index) => (
        <li key={index}>{taskName}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
