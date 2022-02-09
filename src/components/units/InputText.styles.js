import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.left ? "flex-start" : "center"};
    justify-items: center;
    margin-bottom: 18px;
`;

export const StyledLabel = styled.label`
    font-size: 0.9rem;
`;

export const StyledInput = styled.input`
    max-height: 2rem;
    min-width: 250px;
    border: 1px solid var(--color-blue);
    border-radius: 5px;
    padding: 5px;
    font-size: 0.9rem;
    &::placeholder {
        color: var(--color-gray);
        font-weight: 500;
    }
    &:focus-visible { //check if it's ok for all browsers
        outline: 1px solid var(--color-blue);
    }
`;

export const StyledSmallMessage = styled.small`
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 300;
`;