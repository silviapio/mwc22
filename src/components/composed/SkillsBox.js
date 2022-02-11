import { useState, useEffect } from "react";
import InputText from "../units/InputText";
import Button from "../units/Button";
import { charactersLeft } from "../../utils/checkInputText";
import { SkillsBoxContainer, SkillsInputContainer } from "./SkillsBox.styles";

function SkillsBox({handleAddSkill}) {
    const CHAR_ALLOWED_INPUT = 25;
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
    }, [currentSkill])

    const handleSkillChange = e => {
        const charLeft = charactersLeft(CHAR_ALLOWED_INPUT, e.target.value);
        const updatedSkill = {
            text: e.target.value,
            hasError: charLeft < 0
        }
        setCurrentSkill(updatedSkill);
    }

    const handleAdd = e => {
        e.preventDefault();
        if (currentSkill.text) {
            handleAddSkill(currentSkill.text)
        } else {
            return;
        }
    };

    const handleEnterPress = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd(e);
        }
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
                    onKeyPress={handleEnterPress}
                />
                <Button text="Add" dark="true" className="button--add-skill" onClick={handleAdd} disabled={buttonDisabled} />
            </SkillsInputContainer>
        </SkillsBoxContainer>
    );
}

export default SkillsBox;