import { HiOutlineTrash } from "react-icons/hi";
import { LabelContainer, LabelText, LabelButton } from "./Label.styles";

function Label({text}) {
    return(
        <LabelContainer>
            <LabelText>{text}</LabelText>
            <LabelButton>
                <HiOutlineTrash />
            </LabelButton>
        </LabelContainer>
    );
}

export default Label;