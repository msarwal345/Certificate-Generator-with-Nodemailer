import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <FooterSection>
        <h3>Follow Us</h3>
        <SocialIcons>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <h3>Navigation</h3>
        <NavigationLinks>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </NavigationLinks>
      </FooterSection>

      <FooterSection>
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123456789</p>
      </FooterSection>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const FooterSection = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const SocialIcons = styled.div`
  font-size: 1.5rem;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #00f;
    }
  }
`;

const NavigationLinks = styled.div`
  a {
    color: white;
    margin: 5px 0;
    display: block;
    text-decoration: none;

    &:hover {
      color: #00f;
    }
  }
`;

export default Footer;
