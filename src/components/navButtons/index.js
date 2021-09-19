import React from 'react'
import { BtnContainer,LinkEmphasis,Link } from './styled';


export const NavButton = ({name,direction}) => {
  return(
    <BtnContainer>
      <Link href={'#'+direction} >
        {name}
      </Link>
    </BtnContainer>
  )
}

export const NavButtonEmphasis = ({name,direction}) => {
  return(

    <BtnContainer>
      <LinkEmphasis href={'/'+direction} >
      {name}
      </LinkEmphasis>
    </BtnContainer>

  )
}


