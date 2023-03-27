import React from 'react';

import { FooterContainer } from './footer.styles';
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>App</li>
          <li>Training</li>
        </ul>
      </div>
      <div>
        <h3>Blog</h3>
        <ul>
          <li>Technique</li>
          <li>Nutrition</li>
          <li>Gear</li>
          <li>Swim Workouts</li>
          <li>Training</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>Email: info@swimmingblog.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
