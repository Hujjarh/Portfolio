import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/heroImage.jpg';

const HeroImage = () => {
  return (
    <Media>
      <img src={heroImage} alt="A description of the hero image" />
    </Media>
  );
};

export default HeroImage;

const Media = styled.div`
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  
  img {
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    animation: float 5s ease-in-out infinite; 
  }

  @media screen and (max-width: 800px) {
    min-width: 200px;

    img {
      width: 250px;
      animation: none;
    }
  }

  @keyframes float {
    50% {
      transform: translateY(-15px);
    }
  }
`;
