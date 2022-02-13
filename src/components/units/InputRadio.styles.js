import styled from "styled-components";

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 18px;
`;

export const RadioP = styled.p`
    font-size: 1.2rem;
`;

export const RadioAllOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RadioOptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RadioCheck = styled.input`
    color: currentColor;
`;

export const RadioLabel = styled.label`
    margin-left: 4px;
    font-size: 1.1rem;
`;

export const StyledSmallMessage = styled.small`
    color: var(--color-blue);
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
`;