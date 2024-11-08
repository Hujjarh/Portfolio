import React from 'react';
import styled from 'styled-components';
import Html from '../assets/vscode-icons_file-type-html.svg';
import css from '../assets/vscode-icons_file-type-css.svg';
import javascript from '../assets/vscode-icons_file-type-js-official.svg';
import react from '../assets/react.svg';
import git from '../assets/logos_git-icon.svg';
import github from '../assets/akar-icons_github-fill.svg';
import vscode from '../assets/vscode-icons_file-type-vscode.svg';
import nodejs from '../assets/Nodejs.svg';
import mysql from '../assets/MySql.svg';
import mongodb from '../assets/Mongodb.svg';
import typescript from '../assets/typescript.svg';

const StackGPT = () => {
  return (
    <Container>
      <h1>My Tech Stack</h1>
      <h3>I have gained hands-on experience with a range of technologies essential for modern web development</h3>
      <Tech>
        <Tools>
          <p>Technologies I've been working with:</p>
          <ToolGrid>
            <img src={Html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={git} alt="Git" />
            <img src={github} alt="GitHub" />
            <img src={vscode} alt="VSCode" />
          </ToolGrid>
        </Tools>

        <Learn>
          <p>Technologies that I'm learning:</p>
          <LearnGrid>
            <img src={nodejs} alt="Node.js" />
            <img src={mysql} alt="MySQL" />
            <img src={mongodb} alt="MongoDB" />
            <img src={typescript} alt="TypeScript" />
          </LearnGrid>
        </Learn>
      </Tech>
    </Container>
  );
};

export default StackGPT;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
  text-align: center;
  background-color: #f4f7f6;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
    max-width: 600px;
  }

  p {
    font-weight: 600;
    color: #777;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 800px) {
    margin-top: 3em;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const Tools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Learn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LearnGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
