import styled, { keyframes } from 'styled-components';
import { WesAndersonColors, WesAndersonWaterColors } from '../../global.styles';

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  margin-top: 4rem;
  color: ${WesAndersonColors.primary.text};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  width: 70%;
  margin: 1rem auto;
  zindex: 10;
  border-radius: 10px;
  background-color: ${WesAndersonColors.primary.formBackground};
  box-shadow: 0px 2px 4px rgba(218, 165, 32, 0.7),
    inset 4px -1px 6px 5px rgba(218, 165, 32, 0.2);
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
  color: ${WesAndersonColors.primary.text};
`;

export const ContactFormContainer = styled.div`
  flex: 2;
  background-color: ${WesAndersonColors.primary.formBackground};
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
  background-color: ${WesAndersonColors.primary.background};

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
  border-bottom: 1px solid ${WesAndersonColors.primary.text};
  background-color: transparent;
  color: ${WesAndersonColors.primary.text};
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: ${WesAndersonColors.primary.accent};
    box-shadow: 0 0 2px ${WesAndersonColors.primary.accent};
  }
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${WesAndersonColors.primary.text};
  background-color: transparent;
  color: ${WesAndersonColors.primary.text};
  font-family: inherit;
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-bottom-color: ${WesAndersonColors.primary.accent};
    box-shadow: 0 0 3px ${WesAndersonColors.primary.accent};
  }
`;

export const ContactFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactFormButton = styled.button`
  width: auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${WesAndersonColors.primary.text};
  background-color: transparent;
  color: ${WesAndersonColors.primary.text};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${WesAndersonColors.primary.text};
    color: ${WesAndersonColors.primary.formBackground};
  }

  &:focus {
    outline: none;
  }

  &:active {
    animation: ${buttonAnimation} 0.3s ease;
  }
`;
