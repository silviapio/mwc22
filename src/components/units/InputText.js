import { InputContainer, StyledInput, StyledLabel, StyledSmallMessage, StyledTextArea } from "./InputText.styles";

function InputText({left, id, value, labelText, placeholderText, messageText, displayMessage, onChange, onBlur, type, textareaOverFlow}) {

    const inputField = type => {
        if (type === "text") {
            return <StyledInput 
                        id={id} 
                        name={id}
                        type={type} 
                        value={value}
                        placeholder={placeholderText} 
                        outlineRed={displayMessage}
                        onBlur={onBlur} 
                        onChange={onChange}
                    />;
        } else if (type === "textarea") {
            return <StyledTextArea 
                        id={id} 
                        name={id}
                        type={type} 
                        value={value}
                        placeholder={placeholderText} 
                        onBlur={onBlur} 
                        onChange={onChange}
                        textareaOverFlow={textareaOverFlow}
                    />;
        }
    };

    return(
        <InputContainer  left={left}>
            <StyledLabel htmlFor={id}>
            {labelText}
            </StyledLabel>
                {inputField(type)}
            <StyledSmallMessage show={displayMessage} type={type} textareaOverFlow={textareaOverFlow}>
                {messageText}
            </StyledSmallMessage>
        </InputContainer>
    );
}

export default InputText;