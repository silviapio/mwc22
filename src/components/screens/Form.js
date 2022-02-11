import { useState } from "react";
import Title from "../units/Title";
import InputText from "../units/InputText";
import InputRadio from "../units/InputRadio";
import AvatarBox from "../composed/AvatarBox";
import SkillsBox from "../composed/SkillsBox";
import Button from "../units/Button";
import { isEmailInputOk, charactersLeft } from "../../utils/checkInputText";
import { textInputsData, radioGenderData, radioFieldData, radioYearsData } from "../../assets/inputsData";
import { FormOuterContainer, FormInputContainer } from "./Form.styles";

function Form() {
    const CHAR_ALLOWED_DESC = 160;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        country: "",
        description: "",
        gender: "def",
        avatarUrl: "",
        field: "def",
        yearsExp: "def"
    });
    const [inputErrors, setInputErrors] = useState(new Map([
        ["name", { error: true, visible: false }],
        ["email", { error: true, visible: false }],
        ["city", { error: false, visible: false }],
        ["country", { error: true, visible: false }],
        ["description", { error: false, visible: true }]
    ]));
    const [savedData, setSavedData] = useState(JSON.stringify(localStorage.getItem("savedData")) || ""); 

    console.log("rerender")

    const checkOnBlur = e => {
        const field = e.target.name;
        if (field === "email") {
            const updatedErrors = new Map(inputErrors);
            if (!formData.email) {
                updatedErrors.set("email", { error: true, visible: true })
                setInputErrors(updatedErrors);
                return;
            }
            const trimmedStr = formData.email.trim();
            const isValid = isEmailInputOk(trimmedStr);
            updatedErrors.set("email", { error: !isValid, visible: !isValid });
            setInputErrors(updatedErrors);
        } else if (field === "name") {
            const updatedErrors = new Map(inputErrors);
            if (!formData.name) {
                updatedErrors.set("name", { error: true, visible: true });
            } else {
                updatedErrors.set("name", { error: false, visible: false });
            }
            setInputErrors(updatedErrors);
        } else if (field === "country") {
            const updatedErrors = new Map(inputErrors);
            if (!formData.country) {
                updatedErrors.set("country", { error: true, visible: true });
            } else {
                updatedErrors.set("country", { error: false, visible: false });
            }
            setInputErrors(updatedErrors);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit")
    }

    const handleInputChange = e => {
        if (e.target.type === "text" || e.target.type === "textarea" || e.target.type === "radio") {
            setFormData(prevData => ({
                ...prevData,
                [e.target.name] : e.target.value
            }))
        } 
        if (e.target.type === "textarea") {
            const charLeft = charactersLeft(CHAR_ALLOWED_DESC, e.target.value);
            const updatedErrors = new Map(inputErrors);
            updatedErrors.set("description", { error: charLeft < 0, visible: true })
            setInputErrors(updatedErrors)
        }
    };

    const displayMessage = id => {
        if (id === "description") {
            return true;
        } else {
            return hasError(id);
        }
        
    };

    const hasError = id => inputErrors.get(id).error && inputErrors.get(id).visible;

    const getMessage = (str, id) => {
        if (id === "description") {
            return `${charactersLeft(CHAR_ALLOWED_DESC, formData.description)} characters left`;
        } else {
            return str;
        }
    }

    const handleAvatarChange = imgUrl => {
        setFormData(
            prevData => ({
                ...prevData,
                avatarUrl: imgUrl
            })
        );
    };

    const handleAddSkill = str => {
        console.log(str);
    }

    return(
        <>
            <FormOuterContainer onSubmit={handleSubmit} autoComplete="off">
                <Title text="Your Data" />
                <FormInputContainer>
                    {textInputsData.map((input, i) => 
                        <InputText
                            key={i}
                            type={input.type}
                            left="left"
                            id={input.id} 
                            value={formData[input.id]}
                            labelText={input.labelText}
                            placeholderText={input.placeholderText}
                            messageText={getMessage(input.messageText, input.id)}
                            displayMessage={displayMessage(input.id)}
                            textOverFlow={input.type === "textarea" ? inputErrors.get("description").error : undefined}
                            onBlur={checkOnBlur}
                            onChange={handleInputChange}
                        />
                    )}
                    <InputRadio 
                        name={radioFieldData.name}
                        options={radioFieldData.options}
                        value={formData.field}
                        question={radioFieldData.question}
                        infoText="..."
                        onChange={handleInputChange}
                    />
                    <InputRadio 
                        name={radioYearsData.name}
                        options={radioYearsData.options}
                        value={formData.yearsExp}
                        question={radioYearsData.question}
                        infoText="..."
                        onChange={handleInputChange}
                    />
                    <InputRadio
                        name={radioGenderData.name}
                        options={radioGenderData.options}
                        value={formData.gender}
                        question={radioGenderData.question}
                        infoText="we'll use it only for avatar creation"
                        onChange={handleInputChange}
                    />
                    <AvatarBox gender={formData.gender} onChange={handleAvatarChange}/>
                    <SkillsBox handleAddSkill={handleAddSkill}/>
                </FormInputContainer>
                <Button text="Save" onClick={handleSubmit} />

            </FormOuterContainer>
        </>
    );
}

export default Form;