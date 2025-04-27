import styled from 'styled-components';

export const HeaderStyle = styled.header`
  padding: 20px 0;
  margin-bottom: 36px;

  .nav-container {
    margin-top: 10px;
  }
`;

export const Link = styled.a`
  &:first-of-type {
    color: var(--green);
    border-bottom: 1px solid var(--green);
  }

  font-weight: 600;
`;
