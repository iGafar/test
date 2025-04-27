import styled from 'styled-components';

export const ShadowBoxStyle = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  min-width: min-content;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;
