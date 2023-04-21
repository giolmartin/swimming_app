import styled, { keyframes, css } from 'styled-components';
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
  background-color: rgba(254, 240, 172, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  padding: 4rem 2rem;
  margin-top: 0;
  color: ${WesAndersonColors.primary.text};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
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
  width: 50%;
  height: 100%;
  margin: 1rem auto;
  zindex: 10;
  border-radius: 10px;

  @media (min-width: 2200px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) and (max-width: 2199px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 70%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  text-align: center;
  color: ${WesAndersonColors.primary.text};
  &:hover {
    color: ${WesAndersonColors.secondary.text};
  }
`;

export const Card = styled.div`
  ${'' /* display: flex; */}
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      ${ContactImageContainer} {
        transform: rotateY(180deg);
      }

      ${ContactFormContainer} {
        transform: rotateY(0);
      }
    `}
`;

export const ContactFormContainer = styled.div`
  ${
    '' /* flex: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  }
  grid-area: 1 / 1 / 2 / 2;
  padding: 2rem;
  background-color: ${WesAndersonColors.primary.background};
  color: ${WesAndersonColors.primary.text};
  transform: rotateY(180deg);
  transition: transform 0.8s;
  backface-visibility: hidden;
  box-shadow: 0px 2px 4px rgba(218, 165, 32, 0.7),
    inset 4px -1px 6px 5px rgba(218, 165, 32, 0.3);
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const ContactFormImageContainer = styled.div`
position: absolute;
  top: 1rem;
  right: 1rem;
  width: 15%;
  height: 20%;

  @media (max-width: 768px) {
    height:10%;
    width: 20%;

`;

export const ContactFormImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContactImageContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: ${WesAndersonColors.primary.background};
  z-index: 1;
  transition: transform 0.8s;
  backface-visibility: hidden;
  cursor: pointer;

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

  @media (max-width: 768px) {
    text-align: left;
    padding-left: 0.5rem;
  }
`;

export const ContactFormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ContactFormInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${WesAndersonColors.primary.text};
  background-color: transparent;
  color: ${WesAndersonColors.primary.text};
  font-family: 'Josefin Slab', serif;
  font-size: 1.2rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: ${WesAndersonColors.primary.accent};
    box-shadow: 0 0 2px ${WesAndersonColors.primary.accent};
  }

  @media (max-width: 768px) {
    width: 75%;
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${WesAndersonColors.primary.text};
  background-color: transparent;
  color: ${WesAndersonColors.primary.text};
  font-size: 1.2rem;
  font-family: 'Josefin Slab', serif;
  font-style: italic;
  transition: border-color 0.3s ease;
  resize: vertical;
  box-sizing: border-box;

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
  border: none;
  border-bottom: 0.5px solid ${WesAndersonColors.primary.text};
  background-color: rgba(245, 245, 220, 0.2);

  color: ${WesAndersonColors.primary.text};
  font-weight: bold;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-style: italic;

  letter-spacing: 0.1rem;
  margin-top: 1rem;
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
