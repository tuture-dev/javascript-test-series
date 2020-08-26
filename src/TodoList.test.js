import React from 'react';
import { shallow } from 'enzyme';

import ToDoList from './ToDoList';

describe('ToDoList component', () => {
  describe('when provided with an empty array of tasks', () => {
    it('contains an empty <ul> element', () => {
      const toDoList = shallow(<ToDoList tasks={[]} />);
      expect(toDoList).toContainReact(<ul />);
    });

    it('does not contain any <li> elements', () => {
      const toDoList = shallow(<ToDoList tasks={[]} />);
      expect(toDoList.find('li').length).toEqual(0);
    });
  });

  describe('when provided with an array of tasks', () => {
    const tasks = [
      {
        id: 0,
        name: 'Wash the dishes',
      },
      {
        id: 1,
        name: 'Make the bed',
      },
    ];

    it('passes them to the Task components', () => {
      const toDoListInstance = shallow(<ToDoList tasks={tasks} />);

      toDoListInstance.find('Task').forEach((taskInstance) => {
        const taskProps = taskInstance.props();
        const matchingTask = tasks.find((task) => task.id === taskProps.id);
        expect(taskProps.name).toBe(matchingTask.name);
      });
    });
  });
});
