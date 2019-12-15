import styled from 'styled-components';

export const Clearfix = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: ${({ alignment }) => alignment};
  align-items: center;
  background-color: #555555;
  color: #ffffff;
`;
