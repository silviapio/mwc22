import { StyledButton} from "./Button.styles";

function Button({text, onClick, fontSize, maxHeight, dark, className, disabled}) {
    return(
        <StyledButton onClick={onClick} fontSize={fontSize} maxHeight={maxHeight} dark={dark} className={className} disabled={disabled || undefined}>
            {text}
        </StyledButton>
    )
}

export default Button;