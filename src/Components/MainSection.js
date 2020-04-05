import React from 'react';
import styled from 'styled-components';
import SavedPostsList from './SavedPostsList';
import LatestPost from './LatestPosts';
import UsersList from './UsersList';
import Tags from './Tags';

const MainSection = () => (
  <StyledWrapper>
    <StyledMain>
      <h1>Simple blog!</h1>
      <p>main section</p>
    </StyledMain>
    <SavedPostsList />
    <LatestPost />
    <UsersList />
    <Tags />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 20vw auto 20vw;
  gap: 20px;
  margin-top: 5em;
  margin: 5em;
  height: 100vh;
  padding: 1em;
`;

const StyledMain = styled.main`
  border: 1px solid black;
  grid-column: 2/3;
  padding: 1em;
`;

export default MainSection;
