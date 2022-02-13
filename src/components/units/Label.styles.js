import styled from "styled-components";

export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-width: 3rem;
    margin: 2px;
    padding: 1px 5px;
    border-radius: 10px;
    background-color: var(--color-blue);
    &:first-child {
        margin-left: 0;
    }
`;

export const LabelText = styled.p`
    color: var(--color-white);
`;

export const LabelButton = styled.button`
    color: var(--color-gray);
    background-color: var(--color-blue);
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 1px 0px 1px 2px;
    margin-left: 3px;
    &:hover {
        cursor: pointer;
        color: var(--color-yellow);
    }
    &:focus {
        color: var(--color-yellow);
        outline: 1px solid var(--color-yellow);
    }
`;