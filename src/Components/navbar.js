import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #c4c4c4;
  text-decoration: none;
  margin: 0;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Most Popular</li>
        <li>Recent Posts</li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
