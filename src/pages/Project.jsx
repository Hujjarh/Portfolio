import React from 'react';
import styled from 'styled-components';
import Nexcent from '../assets/productImage/Nexcent.jpg';
import eCommerce from '../assets/productImage/eCommerce.png';
import country from '../assets/productImage/country.png';
import landing from '../assets/productImage/landing.png';
import banner from '../assets/productImage/banner.png';
import attachment from '../assets/akar-icons_link-chain.svg';
import github from '../assets/akar-icons_github-fill.svg';
import advice from '../assets/desktop_design.jpg';

const Project = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Projects</h1>
        <p>Here are a selection of projects that highlight my enthusiasm for software development.</p>
      </Wrapper>
      <Cards>
        <Card>
          <img src={Nexcent} alt="Nexcent" />
          <h2>Nexcent</h2>
          <p>Created from scratch a desktop and mobile responsive Landing page for Nexcent. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS, React, JavaScript</p>
          <Link>
            <a href="https://hujjarh.github.io/nexcent/" target='_blank'>
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/nexcent" target='_blank'>
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
        <Card>
          <img src={advice} alt="Advice Generator App" />
          <h2>Advice Generator App</h2>
          <p>Created from scratch a desktop and mobile responsive Landing page for Nexcent. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS, React, JavaScript</p>
          <Link>
            <a href="https://advice-generator-nine-hazel.vercel.app/" target='_blank'>
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/Advice-generator" target='_blank'>
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
        <Card>
          <img src={eCommerce} alt="E-commerce website" />
          <h2>E-commerce Website</h2>
          <p>Created from scratch a desktop and mobile responsive landing page for E-commerce. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS, JavaScript</p>
          <Link>
            <a href="https://hujjarh.github.io/e-commerce/" target='_blank'>
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/e-commerce" target='_blank'>
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
        <Card>
          <img src={country} alt="Country Search" />
          <h2>Country Search</h2>
          <p>Created from scratch a desktop and mobile responsive landing page for country search. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS, React, JavaScript</p>
          <Link>
            <a href="https://hujjarh.github.io/rest-countries-api/" target='_blank' rel="noopener noreferrer">
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/nexcent" target='_blank' rel="noopener noreferrer">
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
        <Card>
          <img src={landing} alt="Product Landing" />
          <h2>Product Landing</h2>
          <p>Created from scratch a desktop and mobile responsive landing page for Product Landing. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS</p>
          <Link>
            <a href="https://hujjarh.github.io/landing/" target='_blank'>
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/landing" target='_blank'>
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
        <Card>
          <img src={banner} alt="Furniro" />
          <h2>Furniro</h2>
          <p>Created from scratch a desktop and mobile responsive landing page for Furniro. This project helped me practice GitHub Pages.</p>
          <p>Tech stack: HTML, CSS</p>
          <Link>
            <a href="https://hujjarh.github.io/furniro/" target='_blank'>
              <img src={attachment} alt="Live preview" />Live preview
            </a>
            <a href="https://github.com/Hujjarh/furniro" target='_blank'>
              <img src={github} alt="View Code" />View Code
            </a>
          </Link>
        </Card>
      </Cards>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  min-height: 100vh;
  /* border: 2px solid red; */
  padding: 20px;
`;

const Wrapper = styled.div`
  text-align: center;
  /* border: 2px solid yellow; */
  /* margin-left: 20px; */
  margin-bottom: 40px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  min-height: 350px;
  width: 300px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px, rgba(14, 30, 37, 0.32) 0px 2px 16px;
  padding: 20px;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(14, 30, 37, 0.32) 0px 4px 20px;
  }

  h2 {
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 10px;
  }
`;

const Link = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-top: auto; 

  a {
    display: flex;
    align-items: center;
    padding-inline: 10px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }

  img {
    width: 20px;
    margin-right: 5px;
  }
`;
