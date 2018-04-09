import styled from 'styled-components';
const colorGray = "#cccccc";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border: solid 1px ${colorGray};
  padding: 0 0 0 10px;
  box-sizing: border-box;
  border: solid 1px ${colorGray};
  border-left: solid 5px red;
  min-height: 50px;

  &.finished {
    position: relative;

    &:after {
      content: '';
      background-color: ${colorGray};
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      opacity: 0.5;
      z-index: 10;
    }
  }
`;

export const Title = styled.h2`
  font-size: 14px;
  margin: 0;
  width: calc(100% - 30px);
`;
