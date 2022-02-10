import { StyledButton} from "./Button.styles";

function Button({text, onClick, fontSize, maxHeight, dark}) {
    return(
        <StyledButton onClick={onClick} fontSize={fontSize} maxHeight={maxHeight} dark={dark}>
            {text}
        </StyledButton>
    )
}

export default Button;