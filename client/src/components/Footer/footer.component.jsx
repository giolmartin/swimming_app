import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import {
  FooterContainer,
  LeftFooter,
  FooterLink,
  RightFooter,
  ReadOurBlog,
  ContactUs,
  SocialMedia,
  SocialIcon,
  Logo,
  LogoText,
  LogoContainer,
  FootersLinksContainer,
  BlogAndContact,
  MiddleFooter,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooter>
        <LogoContainer>
          <Logo src='./images/contact-us.png' alt='Swimming Blog Logo' />
          <LogoText>Share our love for swimming</LogoText>
        </LogoContainer>
      </LeftFooter>
      <MiddleFooter>
        <FootersLinksContainer>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <FooterLink>Home</FooterLink>
          </Link>
          <Link to='/app' style={{ textDecoration: 'none' }}>
            <FooterLink>App</FooterLink>
          </Link>
          <Link to='/training' style={{ textDecoration: 'none' }}>
            <FooterLink>Training</FooterLink>
          </Link>
        </FootersLinksContainer>
      </MiddleFooter>
      <RightFooter>
        <BlogAndContact>
          <Link to='/blogs' style={{ textDecoration: 'none' }}>
            <ReadOurBlog>Read Our Blog</ReadOurBlog>
          </Link>
          <ContactUs>Contact Us</ContactUs>
        </BlogAndContact>
        <SocialMedia>
          <SocialIcon href='https://twitter.com' target='_blank'>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href='https://facebook.com' target='_blank'>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href='https://instagram.com' target='_blank'>
            <FaInstagram />
          </SocialIcon>
        </SocialMedia>
      </RightFooter>
    </FooterContainer>
  );
};

export default Footer;
