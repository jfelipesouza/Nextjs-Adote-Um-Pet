import React from 'react';
import { Container } from '../styles/home';
import Header from '../components/header';
import Image from 'next/image'
import { Session } from '../components/sessions';
import Contact from '../components/contact';





export default function Index() {

  const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <Container>
      <Header/>

      <div id={'home'}>
        <Image
          src={require('../assets/doguinho.jpg')}
          alt={'doguinhos'}
          placeholder='blur'
        />
      </div>

      <hr/>
      <div id={'quem-somos'}>
        <Session
          title='Quem Somos'
          descripition = {Lorem}
          img={require('../assets/littlecats.jpg')}
          reverse={false} />
      </div>

      <hr/>

      <div id={'ajuda'}>
        <Session
          title='Como ajudar'
          descripition = {Lorem}
          img={require('../assets/littlecats.jpg')}
          reverse={true} />
      </div>

      <hr/>

      <div id ={'contato'}>
        <Contact/>
      </div>

      <hr/>
    </Container>
  )
}
