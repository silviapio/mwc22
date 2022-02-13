import styled from "styled-components";
import { devices } from "../../general-styles/mediaQueries";

export const ItemDescription = styled.p`
    font-size: 1rem;
    font-style: italic;
`;

export const ItemData = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    @media ${devices.laptop} {
        max-width: 65vw;
    }
`;