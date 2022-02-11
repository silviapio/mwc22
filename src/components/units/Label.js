import { HiOutlineTrash } from "react-icons/hi";
import { LabelContainer, LabelText, LabelButton } from "./Label.styles";

function Label({text, onClick, id}) {
    const handleClick = (e) => {
        onClick(e, id);
    }

    return(
        <LabelContainer>
            <LabelText>{text}</LabelText>
            <LabelButton onClick={handleClick}>
                <HiOutlineTrash />
            </LabelButton>
        </LabelContainer>
    );
}

export default Label;