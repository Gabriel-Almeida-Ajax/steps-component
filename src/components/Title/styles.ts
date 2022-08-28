import styled from "styled-components";
export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryText};
  margin: 0 0 1.2rem 1rem;
  align-self: self-end;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: 1rem;
  align-self: self-end;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;