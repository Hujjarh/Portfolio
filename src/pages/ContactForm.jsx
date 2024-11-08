import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <Wrapper>
      <InfoSection>
        <h1>LET'S CONNECT</h1>
        <p>Here's my email address: <span>hujjartullarh@gmail.com</span></p>
        <p>For more info, here is my <span>resume</span></p>
      </InfoSection>
      
      <Container>
        <Title>Contact Us</Title>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows="5" required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </Wrapper>
  );
};
export default ContactForm;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f4f7f6;
  min-height: 100vh;
  margin-top: 5rem;
  @media screen and (max-width:800px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  max-width: 300px;
  margin-right: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    color: #324382ff;
  }
`;

const Container = styled.div`
  width: 90%;
  margin-bottom: 2rem;
  max-width: 500px;
  background-color: #fff;
  padding: 2rem;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #324382ff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  resize: vertical;

  &:focus {
    border-color: #324382ff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #324382ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #324382ff;
  }
`;