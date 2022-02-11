import { InputContainer, StyledInput, StyledLabel, StyledSmallMessage, StyledTextArea } from "./InputText.styles";

function InputText({left, id, value, labelText, placeholderText, messageText, displayMessage, onChange, onBlur, onKeyPress, type, textOverFlow, className}) {

    const inputField = type => {
        if (type === "text") {
            if (id === "skills") {
                return <StyledInput 
                    id={id} 
                    name={id}
                    type={type} 
                    value={value}
                    placeholder={placeholderText} 
                    outlineRed={textOverFlow}
                    onBlur={onBlur} 
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    className={`input--${className}`}
                />;
            } else {
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
            }            
        } else if (type === "textarea") {
            return <StyledTextArea 
                        id={id} 
                        name={id}
                        type={type} 
                        value={value}
                        placeholder={placeholderText} 
                        onBlur={onBlur} 
                        onChange={onChange}
                        textOverFlow={textOverFlow}
                    />;
        }
    };

    const hasLabelError = () => {
        if (type === "textarea") {
            return textOverFlow;
        } else if (type === "text") {
            if (id === "skills") {
                return textOverFlow;
            } else {
                return true;
            }
        }
    };
    
    return(
        <InputContainer  left={left} className={`container--${className}`}>
            <StyledLabel htmlFor={id}>
            {labelText}
            </StyledLabel>
                {inputField(type)}
            {/* <StyledSmallMessage show={displayMessage} type={type} id={id} textOverFlow={textOverFlow}> */}
            <StyledSmallMessage show={displayMessage} error={hasLabelError()}>
                {messageText}
            </StyledSmallMessage>
        </InputContainer>
    );
}

export default InputText;