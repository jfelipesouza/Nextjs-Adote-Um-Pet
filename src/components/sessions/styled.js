import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color:${props=>props.theme.colors.primary} ;
  height:100vh ;
  flex-direction:${props=>props.reverse?"row-reverse":"row "} ;

  @media(max-width:720px){
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    text-align:justify;
    padding-left: 15px;
    padding-right: 15px;

  }
  @media(max-width:720px){
    p{
      padding-right:15px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px 15px;

`;

