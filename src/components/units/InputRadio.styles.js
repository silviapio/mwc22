import styled from "styled-components";

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 18px;
`;

export const RadioP = styled.p`
    font-size: 0.9rem;
`;

export const RadioAllOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RadioOptionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const RadioCheck = styled.input`
    color: currentColor;
`;

export const RadioLabel = styled.label`
    margin-left: 4px;
    font-size: 0.85rem;
`;

export const StyledSmallMessage = styled.small`
    color: var(--color-blue);
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 300;
`;