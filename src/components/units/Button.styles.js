import styled from "styled-components";

export const StyledButton = styled.button`
    min-width: 3rem;
    min-height: 1.5rem;
    max-height: 2.5rem;
    padding: 10px;
    border: 1px solid ${props => props.dark ? "var(--color-yellow)" : "var(--color-blue)"};
    border-radius: 5px;
    background-color: ${props => props.dark ? "var(--color-blue)" : "var(--color-yellow)"};
    color: ${props => props.dark ? "var(--color-yellow)" : "var(--color-blue)"};
    font-weight: 500;
    font-size: ${props => props.fontSize || "1rem"};
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: ${props => props.dark ? "var(--color-blue-90)" : "var(--color-yellow-90)"};
    }
    &.button--add-skill {
        max-height: 2rem;
        padding: 5px;
        align-self: flex-start;
        margin-top: 1.4rem;
        margin-left: 0.5rem;
    }
`;