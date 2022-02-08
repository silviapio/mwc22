import styled from "styled-components";

export const StyledButton = styled.button`
    min-width: 3rem;
    min-height: 1.5rem;
    padding: 10px;
    border: 1px solid var(--color-blue);
    border-radius: 5px;
    background-color: var(--color-yellow);
    color: var(--color-blue);
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: var(--color-yellow-90);
    }
`;