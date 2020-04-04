import React from 'react';
import styled from 'styled-components';

const LatestPost = () => (
  <StyledLatestPosts>
    latest posts
    <p></p>
  </StyledLatestPosts>
);

const StyledLatestPosts = styled.div`
  border: 1px solid black;
  padding: 1rem;
  grid-column: 3/4;
  grid-row: 1;
`;

export default LatestPost;
