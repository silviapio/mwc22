import { StyledButton} from "./Button.styles";

function Button({text, onClick, fontSize, maxHeight, dark, className}) {
    return(
        <StyledButton onClick={onClick} fontSize={fontSize} maxHeight={maxHeight} dark={dark} className={className}>
            {text}
        </StyledButton>
    )
}

export default Button;