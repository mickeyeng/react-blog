import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #c4c4c4;
  text-decoration: none;
  margin: 0;
  display: flex;
  padding: 2rem;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    margin: 0 20px;
    font-size: 1.6em;
  }

  a li:hover {
    color: white;
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  input {
    border-radius: 0;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <input placeholder='search' />
      <ul>
        <a>
          <li>Dashboard</li>
        </a>
        <a>
          <li>Profile</li>
        </a>
        <a>
          <li>Most Popular</li>
        </a>
        <a>
          <li>Recent Posts</li>
        </a>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
