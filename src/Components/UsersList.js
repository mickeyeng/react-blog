import React from 'react';
import styled from 'styled-components';

const UserList = () => (
  <StyledUserList>
    user list
    <p></p>
  </StyledUserList>
);

const StyledUserList = styled.div`
  border: 1px solid black;
  padding: 1rem;
  grid-column: 3/4;
  grid-row: 2;
`;

export default UserList;
