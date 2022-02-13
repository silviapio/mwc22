import styled from "styled-components";
import { devices } from "../../general-styles/mediaQueries";

export const MainContainer = styled.div`
    min-height: 100vh;
    width: 90vw;
    min-width: 280px;
    margin: 0;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    @media ${devices.tablet} {
        min-width: 80vw;
        max-width: 90vw;
    }
    @media ${devices.laptop} {
        width: 90vw;
    }
`;