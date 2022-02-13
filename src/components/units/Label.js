import { HiOutlineTrash } from "react-icons/hi";
import { LabelContainer, LabelText, LabelButton } from "./Label.styles";

function Label({text, onClick, id, canBeDeleted = true}) {
    const handleClick = (e) => {
        onClick(e, id);
    };

    return(
        <LabelContainer>
            <LabelText>{text}</LabelText>
            {canBeDeleted && 
                <LabelButton onClick={handleClick} aria-label="delete skill">
                    <HiOutlineTrash />
                </LabelButton>}
        </LabelContainer>
    );
}

export default Label;