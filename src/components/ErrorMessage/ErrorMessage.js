import React from 'react';
import { Message } from './styledComponents';

const ErrorMessage = ({message}) => {
  return (
    <Message>{ message }</Message>
  );
};

export default ErrorMessage;
