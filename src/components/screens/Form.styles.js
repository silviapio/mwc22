import styled from "styled-components";
import { devices } from "../../general-styles/mediaQueries";

export const FormOuterContainer = styled.form`
    max-height: 95%;
    overflow-y: auto;
    padding: 20px 22px 10px 22px;
    @media ${devices.laptop} {
        max-width: 75vw;
        align-self: center;
    }
    @media ${devices.desktop} {
        max-width: 65vw;
    }
`;

export const FormInputContainer = styled.div`
    margin: 20px 0 0 0;
`;

export const BottomButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${devices.tablet} {
        justify-content: center;
    }
    @media ${devices.laptop} {
        justify-content: flex-end;
    }
`;

export const FirstFormGrid = styled.div`
    @media ${devices.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    @media ${devices.desktop} {
       column-gap: 5rem;
    }
`;