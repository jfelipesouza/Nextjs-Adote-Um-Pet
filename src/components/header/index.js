import React from 'react';
import {
  Container,
  LeftContainer,
  RightContainer
} from './styled';
import {NavButton, NavButtonEmphasis} from '../navButtons'

const Header = () =>{

  const Links = [

    {
      name:'Home',
      direction:'home',
    },
    {
      name : 'Quem Somos',
      direction:'quem-somos'
    },
    {
      name : 'Como Ajudar',
      direction:'ajuda'
    },
    {
      name: 'Contato',
      direction: 'contato'
    }

  ]


  return(

    <Container>

        <LeftContainer/>


        <RightContainer>
          {Links.map((props,key)=>(<NavButton key={key} name={props.name} direction={props.direction} />))}
          <NavButtonEmphasis name = {'doe'} direction = {'doe'} />

        </RightContainer>

    </Container>
  )
}

export default Header;
