import styled from "styled-components";

export const StyledBar = styled.header`
    max-height: 5vh;
    min-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const StyledLogo = styled.img`
    max-height: 1.8rem;
    margin: ${props => props.alignLeft ? "0 auto 0 0.5rem" : "0 0.5rem 0 auto"};
`;