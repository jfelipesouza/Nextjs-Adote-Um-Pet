import React from 'react';
import Head from 'next/head';
import {Container} from '../styles/home/styled';
import Header from '../components/header';
import Card from '../components/cards';
import Contact from '../components/contact';
import Footer from '../components/footer';

const visible = false;
export default function Home () {
  return(
    <>
      <Head>
        <title>Adote-me</title>{/* Titulo da pagina */}
      </Head>
{
  //------- Corpo da aplicação --------//
}
      <Container>

        <Header/>

        {
         visible?<Card/> : <Card/>
        }


        <Contact/>

        <Footer/>

      </Container>


    </>
  )
}
