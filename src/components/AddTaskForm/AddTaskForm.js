import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
/**
 * Importing component Styles
 */
import {
  FormWrapper,
  Input,
  Button,
} from './styledComponents';

/**
 * Importing validations Rules
 */
import {
  InputRequired,
  MaxLength,
  LettersAndNumbers,
} from '../../utils/validations';

/**
 * Importing validations Messages
 */
 import {
   isRequired,
   isLength,
   isNotValidString,
 } from '../../utils/errorMessages';

class AddTaskForm extends Component {
  state = {
    taskId: this.props.selected.id || 0,
    inputTask: this.props.selected.task || '',
    errors: {},
    loading: false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      taskId: nextProps.selected.id || 0,
      inputTask: nextProps.selected.task || '',
    }));
  }

  resetValues = () => {
    setTimeout(() => {
      this.setState(() => ({
        taskId: 0,
        inputTask: '',
        loading: false,
      }));
    }, 1000);
  };

  callAction = () => {
    const {
      props: {
        addTask,
        updateTask,
        tasks,
      },
      state: {
        taskId,
        inputTask,
      },
    } = this;
    let data = {
      id: taskId,
      task: inputTask,
      active: true,
    };

    if (taskId !== 0) {
      updateTask(data);
    } else {
      data.id = tasks[tasks.length -1 ].id + 1;
      addTask(data);
    }

    this.resetValues();
  }

  onChange = (e) => {
    e.preventDefault();
    const {
      name,
      value,
    } = e.target;

    const  {
      errors,
    } = this.state;

    if (errors[name]) {
      let errorsList = Object.assign({}, errors);
      delete errorsList[name];
      this.setState(() => ({
        [name]: value,
        errors: errorsList,
      }));
    } else {
      this.setState(() => ({
        [name]: value,
      }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      state: {
        inputTask,
      }
    } = this;

    let errorsList = {};
    if (InputRequired(inputTask) ) errorsList.inputTask = isRequired;
    if (!InputRequired(inputTask) && MaxLength(inputTask) ) errorsList.inputTask = isLength;
    if (!InputRequired(inputTask) && !MaxLength(inputTask) && LettersAndNumbers(inputTask)) {
      errorsList.inputTask = isNotValidString;
    }

    this.setState(() =>({
      errors: errorsList,
    }));

    const isValid = Object.keys(errorsList).length === 0;

    if (isValid) {
      this.setState(() => ({
        loading: true,
      }));

      this.callAction();
    }
  };

  render() {
    const {
      inputTask,
      loading,
      errors,
    } = this.state;

    return (
      <FormWrapper>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            name="inputTask"
            value={inputTask}
            onChange={this.onChange}
          />

          { errors.inputTask && <ErrorMessage message={errors.inputTask} />}

          <Button
            type="submit"
            loading={loading}
          >
            Add Task
          </Button>
        </form>
      </FormWrapper>
    );
  }
}

export default AddTaskForm;
