import { StyledButton} from "./Button.styles";

function Button({text, onClick}) {
    return(
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button;