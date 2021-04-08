import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {id: 1, text: 'operi suđe', completed: false},
        {id: 2, text: 'odmori', completed: false}
      ],
      maxId: 2
    };
  }

  handleTaskAdd = (newTaskText) => {
    const newId = this.state.maxId + 1;
    const newTask = { id: newId, text: newTaskText, completed: false };

    const newTasksList = [newTask, ...this.state.tasks];

    this.setState({tasks: newTasksList, maxId: newId});
  }

  render() {
    return (
    <div>
      <NewTask onAdd={this.handleTaskAdd} />
      {this.state.tasks.map((taskItem) => <Task key={taskItem.id} task={taskItem} />)}
    </div>
  )};
}
