export const InputRequired = (value) => {
  if (!value.toString().trim().length) {
    return true;
  }

  return false;
};

export const MaxLength = (value) => {
  if (value.toString().trim().length > 100) {
    return true;
  }

  return false;
};

export const LettersAndNumbers = (value) => {
  if (!value.match(/^[0-9a-zA-Z\s]+$/)) {
    return true;
  }

  return false;
};
