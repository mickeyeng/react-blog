import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import App from '../App';

const Navbar = () => {
  return (
    <Router>
      <StyledNav>
        <input placeholder='search' />
        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/posts/most-popular'>Most Popular</Link>
          </li>
          <li>
            <Link to='/posts/recent-posts'>Recent Posts</Link>
          </li>
          <li>
            <Link className='navbar-profile' to='/users/profile'>
              Profile
            </Link>
          </li>
        </ul>
      </StyledNav>

      <Switch>
        <Route path='/' component={App} />
        <Route path='/posts/most-popular'>
          {/* Render this component/page here */}
        </Route>
        <Route path='/posts/recent-posts'>
          {/* Render this component/page here */}
        </Route>
        <Route path='/users/profile' component={UsersPage} />
      </Switch>
    </Router>
  );
};

const StyledNav = styled.nav`
  background: #c4c4c4;
  text-decoration: none;
  margin: 0;
  display: flex;
  padding: 2em 5em;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    margin: 0 2em;
    font-size: 1.6em;
  }

  ul li:nth-last-child(1) {
    margin-right: 0;
    color: red;
  }

  li a:hover {
    color: white;
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  input {
    border-radius: 0;
  }

  .navbar-profile {
    border-radius: 50%;
    background: black;
    padding: 1em;
    color: white;
  }
`;

export default Navbar;
