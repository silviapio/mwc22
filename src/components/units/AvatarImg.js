import {StyledImg} from "./AvatarImg.styles";

function AvatarImg({avatarSvg}) {
    return (
        <StyledImg src={avatarSvg} alt="avatar image" />
    );
}

export default AvatarImg;