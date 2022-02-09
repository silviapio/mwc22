import { InputContainer, StyledInput, StyledLabel, StyledSmallMessage } from "./InputText.styles";

function InputText({left, id, labelText, placeholderText, messageText, onBlur}) {
    return(
        <InputContainer  left={left}>
            <StyledLabel htmlFor={id}>
            {labelText}
            </StyledLabel>
            <StyledInput id={id} type="text" placeholder={placeholderText} onBlur={onBlur} />
            <StyledSmallMessage>
                {messageText}
            </StyledSmallMessage>
        </InputContainer>
    );
}

export default InputText;