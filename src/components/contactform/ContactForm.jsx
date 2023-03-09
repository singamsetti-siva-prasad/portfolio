import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  overflow: hidden;
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 2rem;
  position: relative;
`;

const Input = styled.input`
  margin: 1.5rem;
  width: 20%;
  padding: 1.2rem;
  font-weight: bold;
  background-color: white;
  @media (max-width: 767px) {
    width: 70%;
  }
`;
const Textarea = styled.textarea`
  margin: 1.5rem;
  padding: 1.2rem;
  width: 20%;
  font-weight: bold;
  background-color: white;
  @media (max-width: 767px) {
    width: 70%;
  }
`;
const SubmitInput = styled.input`
  margin: 1.5rem;
  padding: 10px 15px;
  text-align: center;
  background-color: transparent;
  color: #e1d9d1;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid #808080;
  border-radius: 5px;
  /* position: absolute;
  right: 500px;
  bottom: 0; */
  float: left;
`;
export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Heading>Contact</Heading>
      <Form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <Input type="text" name="user_name" placeholder="your name" />
        {/* <label>Email</label> */}
        <Input type="email" name="user_email" placeholder="your email" />
        {/* <label>Message</label> */}
        <Textarea name="message" placeholder="message" />
        <SubmitInput type="submit" value="Send" />
      </Form>
    </Container>
  );
};
