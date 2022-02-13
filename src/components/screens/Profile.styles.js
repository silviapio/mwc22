import styled from "styled-components";
import { devices } from "../../general-styles/mediaQueries";

export const ProfileOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    overflow-y: auto;
    background-color: var(--color-gray);
    border-left: 1px solid var(--color-white);
    border-right: 1px solid var(--color-white);
    @media ${devices.laptop} {
        min-height: 95vh;
        min-width: 55vw;
        max-width: 75vw;
        align-self: center;
    }
    @media ${devices.desktop} {
        max-width: 65vw;
    }
`;

export const ProfileInnerContainer = styled.div`
    min-height: 82vh;
    padding: 20px 22px 10px 22px;
    background-color: var(--color-gray);
    display: flex;
    flex-direction: column;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const ProfileErrorContainer = styled.div`
    display: flex; 
    flex-direction: column;
    min-height: 25vh;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 25px 0;
`;

export const ButtonContainer = styled.div`
    margin: 3rem 0 1.5rem 0;
    @media ${devices.desktop} {
        align-self: flex-end;
        margin: 3rem 2rem 1.5rem 2rem;
    }
`;