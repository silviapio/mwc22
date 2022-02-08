import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 85%;
    height: 85%;
    min-width: 280px;
    max-width: 400px;
    margin: 3rem;
    background-color: var(--color-white);
`;

export const WelcomeContainer = styled.div`
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem 2rem;
    padding: 2rem 1.2rem;
    border-radius: 5px;
    background-color: var(--color-gray);
`;