import styled from 'styled-components';
const padding = "10px";
const colorGray = "#cccccc";
const colorBlack= "#333333";
const colorBlue= "blue";
const colorWhite= "#ffffff";

export const FormWrapper = styled.div`
  width: 80%;
  display: block;
  margin: 25px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: ${padding};
  border: solid 1px ${colorGray};
  color: ${colorBlack};
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: ${padding};
  background-color: ${props => props.loading ? colorGray : colorBlue};
  color: ${props => props.loading ? colorBlack : colorWhite};
  cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
  border: 0;
  margin: 20px auto;
  text-transform: uppercase;
  font-size: 14px;
  outline: none;
`;
