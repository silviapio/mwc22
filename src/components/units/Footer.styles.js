import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: auto;
    width: 100%;
    //height: 10%:
    color: var(--color-blue);
    background-color: var(--color-white);
    text-align: center;
    &.footer--gray {
        background-color: var(--color-gray);
    }
`;

export const StyledLinks = styled.div`
    padding-top: 8px;
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--color-blue);
        margin: 5px;
    }
`;