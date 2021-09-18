import React from 'react';
import {
  HeaderContainer,
  LeftContainer,
  RoutesContainer
} from './styled';
import {NavButton,NavButtonEmphasis} from '../navButtons';
import Lottie from 'react-lottie';
import logo from '../animation/animal.json';



function Header() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const routes = [
    {
      name:"Home",
      navigate:'home'
    },
    {
      name:"Quem Somos",
      navigate:'quem-somos'
    },
    {
      name:"Como Ajudar",
      navigate:'como-ajudar'
    },
    {
      name:"Contato",
      navigate:'contato'
    }]

  return (
    <HeaderContainer>

      <LeftContainer>
       <a href={'/'}>
        <Lottie
          options={defaultOptions}
          height={95}
          width={95}
        />
        </a>
      </LeftContainer>

      <RoutesContainer>
        {routes.map((props,key)=>(<NavButton key={key} name = {props.name} direction={props.navigate} />))}

        <NavButtonEmphasis name = "Doe" direction={'doe'} />

      </RoutesContainer>


    </HeaderContainer>
  );
}

export default Header;
