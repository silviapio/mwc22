import styled from "styled-components";

export const AvatarOuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 18px;
`;

export const AvatarTextAndButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 160px;
`;

export const AvatarMessage = styled.small`
    color: var(--color-blue);
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 0.5rem;
`;