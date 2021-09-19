import styled from "styled-components";

export const BtnContainer = styled.div`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Link = styled.a`
  height: 40px;
  background-color:transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  transition-property:all;
  transition-duration: 500ms;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration:none;
  color: #fff;

  :hover{
    text-decoration-line: underline;
    border-radius: 20px;
  }

`;

export const LinkEmphasis = styled.a`
  height: 40px;
  background-color: ${props=>props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  transition-property:border-radius;
  transition-duration: 700ms;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  text-decoration:none;
  color:#fff;

  :hover{
    background-color: ${props=>props.theme.colors.secundary};
    border-radius: 90px;
  }

`;
