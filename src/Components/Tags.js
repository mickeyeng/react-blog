import React from 'react';
import styled from 'styled-components';

const Tags = () => (
  <StyledTags>
    <p>tags</p>
  </StyledTags>
);

const StyledTags = styled.div`
  border: 1px solid black;
  padding: 1rem;
  grid-column: 3/4;
  grid-row: 3;
`;

export default Tags;
