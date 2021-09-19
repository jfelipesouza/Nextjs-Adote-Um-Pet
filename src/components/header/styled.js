import styled from 'styled-components';

export const Container = styled.header`
  height: 50px;
  width: 100vw;
  background-color:${props=>props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
  position: fixed;
  top:0;
  right: 0;
  z-index: 1;

  @media(max-width:400px){
    height:30px ;
  }

`;


export const LeftContainer = styled.header`
  background-color:blue;

`;


export const RightContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media(max-width:800px){
    display: none;
  }

`;
