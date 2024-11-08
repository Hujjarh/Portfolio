import React from 'react';
import styled from 'styled-components';

const AboutGPT = () => {
  return (
    <Container>
      <Wrapper>
        <h1>About Me</h1>
        <AboutMe>
          <h2>I am a Fullstack Web Developer</h2>
          <p>
            A fullstack web developer based in Lagos with a background in Physics. I specialize in creating engaging and user-friendly web interfaces using HTML, CSS, JavaScript, and React. With a passion for translating designs into interactive experiences, I focus on building responsive and efficient websites that deliver a seamless user experience. I'm constantly exploring new tools and frameworks to expand my skill set and enhance the functionality and aesthetics of my projects.
          </p>
          <MoreAboutMe href="/">More About Me</MoreAboutMe>
        </AboutMe>
      </Wrapper>
    </Container>
  );
};

export default AboutGPT;


const Container = styled.div`
  min-height: 500px;
  display: flex;
  /* border: 2px solid; */
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f4f7f6;

  @media screen and (max-width: 800px) {
    min-width: 80%;
    /* margin-left: auto; */
    /* margin-right: auto; */
  }
`;

const Wrapper = styled.div`
  text-align: center;
  max-width: 800px; 
`;

const AboutMe = styled.div`
  width: 100%;
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5em;
    line-height: 1.5; /* Better readability */
    color: #555;
  }
`;

const MoreAboutMe = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #324382ff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;
