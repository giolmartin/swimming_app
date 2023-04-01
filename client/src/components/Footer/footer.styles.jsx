import styled, { css } from 'styled-components';
import { WesAndersonDark } from '../../global.styles';

const linkHoverStyles = css`
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${WesAndersonDark.primary.accent1};
    transition: width 0.3s;
    margin: 0.5rem auto;
  }

  &:hover::after {
    width: 50%;
  }
`;

export const FooterContainer = styled.footer`
  background-color: ${WesAndersonDark.primary.background};
  color: ${WesAndersonDark.primary.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 500px;
  padding: 4rem 10rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const MiddleFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 0.5rem;
`;

export const LogoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const FootersLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${WesAndersonDark.primary.text};
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;
  ${linkHoverStyles}
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ReadOurBlog = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ContactUs = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const SocialIcon = styled.a`
  color: ${WesAndersonDark.primary.text};
  font-size: 1.5rem;
  transition: color 0.3s
  &:hover {
    color: ${WesAndersonDark.primary.accent1};
  }
`;

export const BlogAndContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
