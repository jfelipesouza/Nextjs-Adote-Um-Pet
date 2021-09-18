import React from 'react'
import {
  Container,
  ContainerEmphasis
} from './styled';


export const NavButton = ({name,direction}) => {

  const navigate = '#'+direction

  return(
    <Container>

      <a href={navigate} >
        {name}
      </a>

    </Container>
  )

}

export const NavButtonEmphasis = ({name,direction}) =>{


  return(
    <ContainerEmphasis>
      <a href={'/'+direction} >
        {name}
      </a>
    </ContainerEmphasis>
  )
}

