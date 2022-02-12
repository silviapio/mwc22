import { StyledButton} from "./Button.styles";

function Button({text, onClick, fontSize, maxHeight, dark, className, disabled}) {
    return(
        <StyledButton onClick={onClick} dark={dark} className={className} disabled={disabled || undefined}>
            {text}
        </StyledButton>
    )
}

export default Button;