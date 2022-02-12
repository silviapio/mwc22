import styled from "styled-components";

export const ProfileOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-y: auto;
    background-color: var(--color-gray);
    border-left: 1px solid var(--color-white);
    border-right: 1px solid var(--color-white);
`;

export const ProfileInnerContainer = styled.div`
    min-height: 82vh;
    padding: 20px 10px 10px 22px;
    background-color: var(--color-gray);

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