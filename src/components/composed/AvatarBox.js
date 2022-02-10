import { useState, useEffect } from "react";
import Button from "../units/Button";
import { AvatarImg, AvatarOuterContainer, AvatarTextAndButton, AvatarMessage } from "./AvatarBox.styles";

function AvatarBox({gender, onChange}) {
    const [avatarSvg, setAvatarSvg] = useState("");

    const randomID = () => ( "" + Math.random().toString(36).substring(2, 6));

    useEffect(() => {
        retrieveAvatar(gender);
    }, [gender])

    useEffect(() => {
        onChange(avatarSvg);
    }, [avatarSvg])

    const retrieveAvatar = (gender, e) => {
        if (e) {
            e.preventDefault();
        }
        let options = "";
        const seed = randomID();
        if (gender === "W") {
            options = "?facialHairProbability=0&head[]=medium1";
        } else if (gender === "M") {
            options = "?facialHairProbability=50&facialHair[]=moustache1&head[]=short2";
        }
        fetch(`https://avatars.dicebear.com/api/open-peeps/${seed}.svg${options}`)
            .then(res => setAvatarSvg(res.url));
    };

    return(
        <AvatarOuterContainer>
            <AvatarImg src={avatarSvg} />
            <AvatarTextAndButton>
                <AvatarMessage>Don't like what you see? Try changing the gender or hit the button below!</AvatarMessage>
            <Button text="Change it" fontSize="0.8rem" maxHeight={1.5} dark={true} onClick={e => retrieveAvatar(gender, e)}></Button>
            </AvatarTextAndButton>
        </AvatarOuterContainer>
    );
}

export default AvatarBox;