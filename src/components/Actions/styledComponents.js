import styled from 'styled-components';
const colorGray = '#cccccc';
const colorBlack = "#333333";
const colorWhite = "#ffffff";

export const Wrapper = styled.div`
  width: 30px;
  background: ${colorGray};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  position: relative;
  cursor: pointer;
`;

export const List = styled.ul`
  margin: 0;
  padding: 5px;
  list-style: none;
  border-radius: 4px;
  background-color: ${colorGray};
  position: absolute;
  top: -75px;
  width: 100px;
  right: 0;
  z-index: 20;
`;

export const Item = styled.li`
  display: block;
  border-bottom: solid 1px ${colorWhite};
  padding: 3px 0;

  &:last-child {
    border-bottom: 0;
  }

  button {
    background: transparent;
    border: 0;
    color: ${colorBlack};
    outline: none;
    cursor: pointer;
  }
`;
