import React from 'react';
import {Container,Left,Right} from './styled';
import Image from 'next/image';


export const Session = ({title,descripition,img, reverse})=>{
  return(
    <Container reverse={reverse}  >
        <Left>
          <h1>{title}</h1>
          <p>
            {descripition}
          </p>
        </Left>
        <Right>
          <Image
            src={img}
            alt={title}
            placeholder={'blur'}


          />
        </Right>
    </Container>
  )
}
