import styled from 'styled-components';

const colorWhite = '#ffffff';
const colorGray = '#cccccc'

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: calc(100vh - 200px);
  display:block;
  margin: 100px auto;
  background: ${colorWhite};
  box-shadow: 0px 0px 10px ${colorGray};
  overflow: hidden;
  overflow-y: auto;
`;

export const AppList = styled.div`
  width: 80%;
  display: block;
  margin: 25px auto;
`;
