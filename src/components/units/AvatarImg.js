import {StyledImg} from "./AvatarImg.styles";

function AvatarImg({avatarSvg}) {
    return (
        <StyledImg src={avatarSvg} />
    );
}

export default AvatarImg;