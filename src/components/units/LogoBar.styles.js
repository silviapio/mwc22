import styled from "styled-components";

export const StyledBar = styled.header`
    min-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogo = styled.img`
    max-height: 1.4rem;
    margin: ${props => props.alignLeft ? "0 auto 0 0.5rem" : "0 0.5rem 0 auto"};
`;