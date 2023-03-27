import React from 'react';

import {
  ContactContainer,
  ContactFormContainer,
  ContactImageContainer,
  ContactImage,
  ContactForm,
  ContactFormField,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormButton,
  ContactFormButtonContainer,
  InnerContainer,
  ContactTitle,
  ImageContainer,
} from './contact.styles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <ContactContainer id='contact'>
      <ImageContainer>
        <img
          src='./images/contact-background-2.png'
          alt='Contact Illustration'
        />
      </ImageContainer>
      <ContactTitle>Drop Us A Message</ContactTitle>
      <InnerContainer>
        <ContactFormContainer>
          <ContactForm onSubmit={handleSubmit}>
            <ContactFormField>
              <ContactFormLabel htmlFor='name'>Name</ContactFormLabel>
              <ContactFormInput type='text' id='name' name='name' />
            </ContactFormField>

            <ContactFormField>
              <ContactFormLabel htmlFor='email'>Email</ContactFormLabel>
              <ContactFormInput type='email' id='email' name='email' />
            </ContactFormField>

            <ContactFormField>
              <ContactFormLabel htmlFor='message'>Message</ContactFormLabel>
              <ContactFormTextarea id='message' name='message' rows='5' />
            </ContactFormField>
            <ContactFormButtonContainer>
              <ContactFormButton type='submit'>Send</ContactFormButton>
            </ContactFormButtonContainer>
          </ContactForm>
        </ContactFormContainer>
        <ContactImageContainer>
          <ContactImage src='./images/contact-us.png' alt='' />
        </ContactImageContainer>
      </InnerContainer>
    </ContactContainer>
  );
};

export default Contact;
