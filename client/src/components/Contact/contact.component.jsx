import React, { useState } from 'react';

import { useBlogContext } from '../../context/blog.context';

import Image from './landing.jpeg';
import Seal from './contact-us.png';

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
  ContactFormImageContainer,
  ContactFormImage,
  Card,
} from './contact.styles';

const Contact = () => {
  const { sendMail } = useBlogContext();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  //TODO: Handle form submission. Send email to owner.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    if (formData.name && formData.email && formData.message) {
      const response = await sendMail(formData);
      console.log(response);
    }

    console.log(formData);
  };

  return (
    <ContactContainer id='contact'>
      <ContactTitle onClick={handleFlip}>Drop Us A Message</ContactTitle>
      <InnerContainer>
        <Card isFlipped={isFlipped}>
          <ContactImageContainer onClick={handleFlip}>
            <ContactImage src={Image} alt='Swimming' />
          </ContactImageContainer>
          <ContactFormContainer isFlipped={isFlipped}>
            <ContactFormImageContainer onClick={handleFlip}>
              <ContactFormImage src={Seal} alt='Swimming' />
            </ContactFormImageContainer>

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
        </Card>
      </InnerContainer>
    </ContactContainer>
  );
};

export default Contact;
