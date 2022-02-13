import { useState, useEffect } from "react";
import InputText from "../units/InputText";
import Button from "../units/Button";
import Label from "../units/Label";
import { charactersLeft } from "../../utils/checkInputText";
import { SkillsBoxContainer, SkillsInputContainer, SkillLabelsContainer } from "./SkillsBox.styles";

function SkillsBox({handleAddSkill, handleDeleteSkill, labels}) {
    const CHAR_ALLOWED_INPUT = 20;
    const [currentSkill, setCurrentSkill] = useState({
        text: "",
        hasError: false
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (!currentSkill.text || currentSkill.hasError) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [currentSkill]);

    const handleSkillChange = e => {
        const charLeft = charactersLeft(CHAR_ALLOWED_INPUT, e.target.value);
        const updatedSkill = {
            text: e.target.value,
            hasError: charLeft < 0
        }
        setCurrentSkill(updatedSkill);
    };

    const handleAdd = e => {
        e.preventDefault();
        if (currentSkill.text && !currentSkill.hasError) {
            handleAddSkill(currentSkill.text);
            setCurrentSkill({
                text: "",
                hasError: false
            });
        } else {
            return;
        }
    };

    const handleEnterPress = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd(e);
        }
    };

    const onDeleteSkill = (e, id) => {
        e.preventDefault();
        handleDeleteSkill(id);
    };

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
                    onKeyPress={handleEnterPress}
                    className="skills-input"
                />
                <Button 
                    text="Add" 
                    dark="true" 
                    className="button--add-skill" 
                    onClick={handleAdd} 
                    disabled={buttonDisabled} 
                />
            </SkillsInputContainer>
            <SkillLabelsContainer>
                {labels.map((skill, i) => <Label key={i} text={skill} id={i} onClick={onDeleteSkill}/>)}
            </SkillLabelsContainer>
        </SkillsBoxContainer>
    );
}

export default SkillsBox;