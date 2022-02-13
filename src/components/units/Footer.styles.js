import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: auto;
    width: 100%;
    min-height: 5vh:
    color: var(--color-blue);
    background-color: var(--color-white);
    text-align: center;
    line-height: 1;
    font-size: 0.8rem;
    &.footer--profile {
        background-color: var(--color-white);
    }
`;

export const StyledLinks = styled.div`
    padding-top: 0.3rem;
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
    }
    svg {
        width: 1.2rem;
        height: 1.2rem;
        color: var(--color-blue);
        margin: 5px;
    }
`;