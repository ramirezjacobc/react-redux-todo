import React, { Component } from 'react';
import Actions from '../Actions/Actions';
import {
  Wrapper,
  Title,
} from './styledComponents';

class TodoItem extends Component {
  handleClick = (id, type) => {
    const {
      onClick,
    } = this.props;
    onClick(id, type);
  };

  render() {
    const {
      data: {
        id,
        task,
        active,
      },
    } = this.props;
    return (
      <Wrapper className={ !active ? 'finished' : ''}>
        <Title>{ task }</Title>
        <Actions id={id} onClick={this.handleClick} />
      </Wrapper>
    );
  }
}

export default TodoItem;
