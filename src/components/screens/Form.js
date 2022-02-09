import { useState } from "react";
import Title from "../units/Title";
import InputText from "../units/InputText";
import Button from "../units/Button";
import { isEmailInputOk } from "../../utils/checkInputText";
import textInputsData from "../../assets/inputsData";
import { FormOuterContainer, FormInputContainer } from "./Form.styles";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        country: "",
        description: "",
    });
    const [inputErrors, setInputErrors] = useState(new Map([
        ["name", { error: true, visible: false }],
        ["email", { error: true, visible: false }],
        ["city", { error: false, visible: false }],
        ["country", { error: true, visible: false }],
        ["description", { error: false, visible: false }]
    ]));
    const [savedData, setSavedData] = useState(JSON.stringify(localStorage.getItem("savedData")) || "");

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

    const handleInputChange = (type, e) => {
        if (type === "text") {
            setFormData(prevData => ({
                ...prevData,
                [e.target.name] : e.target.value
            }))
        }
    }

    const displayMessage = id => {
        if (id === "description") {
            return true;
        } else {
            return hasError(id);
        }
        
    };

    const hasError = id => inputErrors.get(id).error && inputErrors.get(id).visible;

    return(
        <>
            <FormOuterContainer onSubmit={handleSubmit}>
                <Title text="Basic Data" />
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
                            messageText={input.messageText}
                            displayMessage={displayMessage(input.id)}
                            onBlur={checkOnBlur}
                            onChange={e => handleInputChange("text", e)}
                        />
                    )}
                </FormInputContainer>
                <Button text="Save" onClick={handleSubmit} />

            </FormOuterContainer>
        </>
    );
}

export default Form;