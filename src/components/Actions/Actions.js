import React, { Component } from 'react';
/**
 * Importing component Styles
 */
import {
  Wrapper,
  List,
  Item,
} from './styledComponents';

class Action extends Component {
  state = {
    show: false,
  };

  setActions = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  handleClick = (id, type) => {
    const {
      onClick,
    } = this.props;
    onClick(id, type);
  }

  render() {
    const {
      state: {
        show,
      },
      props: {
        id,
      }
    } = this;

    const ActionsList = (
      <List>
        <Item>
          <button onClick={() => this.handleClick(id, 'finish')}>
            Finish task
          </button>
        </Item>
        <Item>
          <button onClick={() => this.handleClick(id, 'edit')}>
            Edit
          </button>
        </Item>
        <Item>
          <button onClick={() => this.handleClick(id, 'delete')}>
            Delete
          </button>
        </Item>
      </List>
    );

    return (
      <Wrapper role="button" onClick={this.setActions} >
        >
        { show && ActionsList}
      </Wrapper>
    );
  }
}

export default Action;
