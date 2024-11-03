import React from 'react';
import HeroText from '../components/HeroText';
import HeroImage from '../components/HeroImage';
import styled from 'styled-components';
import AboutGPT from './AboutGPT';
import StackGPT from './StackGPT';
import Project from './Project';
import ContactForm from './ContactForm';

const Homepage = () => {
  return (
    <Container>
     <TextImage>
     <HeroText />
     <HeroImage />
     </TextImage>
     <AboutGPT />
     <StackGPT />
     <Project />
     <ContactForm />

    </Container>
  );
};

export default Homepage;

const Container = styled.div``

const TextImage = styled.div`
min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px; 
  
  @media screen and (max-width: 800px) {
    min-width: 90%; 
    flex-direction: column;
    gap: 20px; 
  }
`
