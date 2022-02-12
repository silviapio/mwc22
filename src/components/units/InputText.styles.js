import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.left ? "flex-start" : "center"};
    justify-items: center;
    margin-bottom: 18px;
    &.container--skills-input {
        margin-bottom: 5px;
    }
`;

export const StyledLabel = styled.label`
    font-size: 1.2rem;
`;

export const StyledInput = styled.input`
    max-height: 2rem;
    min-width: 250px;
    border: 1px solid ${props => props.outlineRed ? "red" : "var(--color-blue)"};
    border-radius: 5px;
    padding: 5px;
    color: var(--color-blue);
    font-size: 1.1rem;
    &::placeholder {
        color: var(--color-gray);
        font-weight: 500;
    }
    &:focus-visible { //check if it's ok for all browsers
        outline: 1px solid ${props => props.outlineRed ? "red" : "var(--color-blue)"};
    }
    &.input--skills-input {
        min-width: 200px;
    }
`;

export const StyledTextArea = styled.textarea`
    min-height: 5rem;
    min-width: 250px;
    resize: none;
    border: 1px solid ${props => props.textOverFlow ? "red" : "var(--color-blue)"};
    border-radius: 5px;
    padding: 5px;
    color: var(--color-blue);
    font-size: 1rem;
    &::placeholder {
        color: var(--color-gray);
        font-weight: 500;
    }
    &:focus-visible { //check if it's ok for all browsers
        outline: 1px solid ${props => props.textOverFlow ? "red" : "var(--color-blue)"};
    }
`;

export const StyledSmallMessage = styled.small`
    display: ${props => props.show ? "block" : "none"};
    color: ${props => props.error ? "red" : "currentColor" };
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
`;