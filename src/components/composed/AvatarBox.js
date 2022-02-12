import { useState, useEffect } from "react";
import Button from "../units/Button";
import AvatarImg from "../units/AvatarImg";
import defaultAvatar from "../../assets/defaultAvatar.svg";
import { AvatarOuterContainer, AvatarTextAndButton, AvatarMessage } from "./AvatarBox.styles";

function AvatarBox({gender, onChange, selectedImg}) {
    const [avatarSvg, setAvatarSvg] = useState(selectedImg || "");
    const [fetchError, setFetchError] = useState(false);

    const randomID = () => ( "" + Math.random().toString(36).substring(2, 6));

    useEffect(() => {
        if(selectedImg) {
            return;
        } else {
            retrieveAvatar(gender);
        }
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
            .then(res => {
                setAvatarSvg(res.url);
                setFetchError(false);
            })
            .catch(() => {
                setAvatarSvg(defaultAvatar);
                setFetchError(true);
            });
    };

    return(
        <AvatarOuterContainer>
            <AvatarImg avatarSvg={avatarSvg} />
            <AvatarTextAndButton>
                <AvatarMessage>
                    { fetchError ? 
                    "Network error: no other images available"
                    :
                    "Don't like it? Change gender and/or hit the button below!"}
                </AvatarMessage>
            <Button 
                text={ fetchError ? "Try again" : "Change it"} 
                fontSize="0.8rem" 
                maxHeight={1.5} 
                dark={true} 
                onClick={e => retrieveAvatar(gender, e)}
                className="button--change-avatar"
            />
            </AvatarTextAndButton>
        </AvatarOuterContainer>
    );
}

export default AvatarBox;