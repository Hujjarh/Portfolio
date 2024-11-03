import React from 'react';
import styled from 'styled-components';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Media = () => {
  return (
    <Socials>
      <SocialIcon as={FaSquareXTwitter} />
      <a href="https://github.com/Hujjarh" target='_blank'><SocialIcon as={IoLogoGithub} /></a>
      <a href="https://www.linkedin.com/in/MahmudHujjatullah" target='_blank'><SocialIcon as={FaLinkedin} /></a>
    </Socials>
  );
};

export default Media;

const Socials = styled.div`
  display: flex;
  gap: 15px; 
  cursor: pointer;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f4f4f4;
  color: #555; 
  transition: color 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    color: #324382ff;
    background-color: #e0e0e0;
  }
`;
