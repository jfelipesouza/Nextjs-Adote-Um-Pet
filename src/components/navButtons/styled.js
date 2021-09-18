import styled,{keyframes} from 'styled-components';

export const Container = styled.div`
  height:40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 0 15px ;
  border-radius: 5px 5px 5px 5px;
  transition: border-radius;
  transition-duration:1000ms;
  transition-timing-function:ease-in-out;
  text-transform:capitalize;


  :hover{
    border-radius: 100px 100px 100px 100px;
    background-color: tomato;
  }

  a{
    text-decoration:none;
    color:#222;
    font-size:1.1rem;

    :hover{
      color:#fff;

    }
  }

`;


export const ContainerEmphasis = styled.div`
  height:40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 0 10px ;
  border-radius: 5px 5px 5px 5px;
  transition: all;
  transition-duration: 500ms;
  transition-timing-function:ease-in;
  text-transform: capitalize;
  background-color: #ff6347dd;
  box-shadow:1px 1px 1px 0px black;

  :hover{
    border-radius: 100px;
    background-color: #ff6347ff;
  }

  a{
    text-decoration:none;
    color:#fff;
    font-size:1.1rem;

  }


`;
