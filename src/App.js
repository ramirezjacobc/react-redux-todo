import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
  finishTask,
} from './actions/general';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TodoItem from './components/TodoItem/TodoItem';

import {
  AppWrapper,
  AppList,
} from './styledComponents';

class App extends Component {
  handleClick = (id, type) => {
    const {
      getTask,
      deleteTask,
      finishTask,
    } = this.props;
    switch(type) {
      case 'delete':
        deleteTask(id);
        break;
      case 'edit':
        getTask(id);
        break;
      case 'finish':
        finishTask(id);
        break;
      default:
        break;
    }
  };

  render() {
    const {
      tasks,
      addTask,
      updateTask,
      selected,
    } = this.props;

    let tasksList = "There are no tasks";

    if (tasks.length > 0) {
      let items = [];
      tasks.map((item) => (
        items.push(<TodoItem
          key={item.id}
          data={item}
          onClick={this.handleClick}
        />)
      ))
      tasksList = items;
    }

    return (
      <AppWrapper>
        <AddTaskForm
          selected={selected}
          addTask={addTask}
          updateTask={updateTask}
          tasks={tasks}
        />
        <AppList>
          { tasksList }

        </AppList>
      </AppWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.general.tasks,
    selected: state.general.selected,
  };
}

export default connect(mapStateToProps, {
  addTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
  finishTask,
})(App);
