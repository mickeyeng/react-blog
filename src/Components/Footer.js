import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 2em;
  width: 100%;
  text-align: center;
  margin: 2rem 0 0 0;
  background: #c4c4c4;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>Footer</p>
    </FooterStyles>
  );
};

export default Footer;
