import styled from "styled-components";

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    margin: 1rem;
    background-color: ${props => props.theme.colors.paper};
    border-radius: 0.5rem;
    width: 70%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
