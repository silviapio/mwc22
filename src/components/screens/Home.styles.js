import styled from "styled-components";
import { devices } from "../../general-styles/mediaQueries";

export const WelcomeContainer = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem 2rem;
    padding: 2rem 1.2rem;
    border-radius: 5px;
    background-color: var(--color-gray);
    @media ${devices.tablet} {
        width: 60vw;
        align-self: center;
    }
    @media ${devices.laptop} {
        width: 40vw;
        align-self: center;
    }
`;

export const StyledHomeP = styled.p`
    line-height: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
`;