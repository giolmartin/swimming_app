import styled, { keyframes } from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

const buttonAnimation = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(-5px);
}
100% {
  transform: translateY(0);
}
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${WesAndersonColors.background};
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 70%;
  margin: 1rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${WesAndersonColors.text};
`;

export const ContactFormContainer = styled.div`
  flex: 2;
  background-color: ${WesAndersonColors.formBackground};
  padding: 2rem;
  font-family: 'Courier New', Courier, monospace;
  color: ${WesAndersonColors.text};

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  zindex: -1;
`;

export const ContactImageContainer = styled.div`
  flex: 1;
  background-color: ${WesAndersonColors.background};

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactFormField = styled.div`
  margin-bottom: 1rem;
`;

export const ContactFormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const ContactFormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${WesAndersonColors.text};
  background-color: transparent;
  color: ${WesAndersonColors.text};
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: ${WesAndersonColors.accent};
    box-shadow: 0 0 2px ${WesAndersonColors.accent};
  }
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${WesAndersonColors.text};
  background-color: transparent;
  color: ${WesAndersonColors.text};
  font-family: inherit;
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-bottom-color: ${WesAndersonColors.accent};
    box-shadow: 0 0 3px ${WesAndersonColors.accent};
  }
`;

export const ContactFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactFormButton = styled.button`
  width: 25%;
  padding: 0.5rem 1rem;
  border: 1px solid ${WesAndersonColors.text};
  background-color: transparent;
  color: ${WesAndersonColors.text};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${WesAndersonColors.text};
    color: ${WesAndersonColors.formBackground};
  }

  &:focus {
    outline: none;
  }

  &:active {
    animation: ${buttonAnimation} 0.3s ease;
  }
`;
