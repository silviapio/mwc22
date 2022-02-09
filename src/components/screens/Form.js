import { useState } from "react";
import Title from "../units/Title";
import InputText from "../units/InputText";
import Button from "../units/Button";
import textInputsData from "../../assets/inputsData";
import { FormOuterContainer, FormInputContainer } from "./Form.styles";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        country: "",
        description: "",
    })

    const checkOnBlur = (e) => {
        console.log("check field", e)
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
                            onBlur={input.checkOnBlur && checkOnBlur}
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