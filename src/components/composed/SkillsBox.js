import { useState } from "react";
import InputText from "../units/InputText";
import Button from "../units/Button";
import { charactersLeft } from "../../utils/checkInputText";
import { SkillsBoxContainer, SkillsInputContainer } from "./SkillsBox.styles";

function SkillsBox() {
    const CHAR_ALLOWED_INPUT = 25;
    const [currentSkill, setCurrentSkill] = useState({
        text: "",
        hasError: false
    });

    const handleSkillChange = e => {
        const charLeft = charactersLeft(CHAR_ALLOWED_INPUT, e.target.value);
        const updatedSkill = {
            text: e.target.value,
            hasError: charLeft < 0
        }
        setCurrentSkill(updatedSkill);
    }

    return(
        <SkillsBoxContainer>
            <SkillsInputContainer>
                <InputText
                    left={true}
                    id="skills"
                    labelText="Add your skills one by one"
                    type="text"
                    value={currentSkill.text}
                    placeholderText="ex: JavaScript"
                    displayMessage={true}
                    messageText={`${charactersLeft(CHAR_ALLOWED_INPUT, currentSkill.text)} characters left`}
                    textOverFlow={currentSkill.hasError}
                    onChange={handleSkillChange}
                />
                <Button text="Add" dark="true" className="button--add-skill" />
            </SkillsInputContainer>
        </SkillsBoxContainer>
    );
}

export default SkillsBox;

/* left, id, value, labelText, placeholderText, messageText, displayMessage, onChange, onBlur, type, textOverFlow}) {

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
                        textOverFlow={textOverFlow}
                    />;
        }
    };

    return(
        <InputContainer  left={left}>
            <StyledLabel htmlFor={id}>
            {labelText}
            </StyledLabel>
                {inputField(type)}
            <StyledSmallMessage show={displayMessage} type={type} textOverFlow={textOverFlow}>
                {messageText}
            </StyledSmallMessage>
        </InputContainer>
*/