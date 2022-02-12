import styled from "styled-components";

export const ProfileOuterContainer = styled.div`
    height: 96%;
    overflow-y: auto;
    padding: 20px 10px 10px 10px;
    border: 1px solid var(--color-white);
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
    justify-content: center;
    align-items: flex-start;
    padding: 25px 0;
`;