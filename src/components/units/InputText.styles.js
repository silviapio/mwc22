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
    border: 1px solid ${props => props.outlineRed ? "red" : "var(--color-blue)"};
    border-radius: 5px;
    padding: 5px;
    color: var(--color-blue);
    font-size: 0.9rem;
    &::placeholder {
        color: var(--color-gray);
        font-weight: 500;
    }
    &:focus-visible { //check if it's ok for all browsers
        outline: 1px solid var(--color-blue);
        border: 1px solid var(--color-blue);
    }
`;

export const StyledTextArea = styled.textarea`
    min-height: 5rem;
    min-width: 250px;
    resize: none;
    border: 1px solid ${props => props.textareaOverFlow ? "red" : "var(--color-blue)"};
    border-radius: 5px;
    padding: 5px;
    color: var(--color-blue);
    font-size: 0.8rem;
    &::placeholder {
        color: var(--color-gray);
        font-weight: 500;
    }
    &:focus-visible { //check if it's ok for all browsers
        outline: 1px solid ${props => props.textareaOverFlow ? "red" : "var(--color-blue)"};
    }
`;

export const StyledSmallMessage = styled.small`
    display: ${props => props.show ? "block" : "none"};
    color: ${props => props.type === "text" || props.textareaOverFlow ? "red" : "currentColor" };
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 300;
`;