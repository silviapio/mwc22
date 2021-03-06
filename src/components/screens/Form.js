import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../units/Title";
import InputText from "../units/InputText";
import InputRadio from "../units/InputRadio";
import AvatarBox from "../composed/AvatarBox";
import SkillsBox from "../composed/SkillsBox";
import Button from "../units/Button";
import Footer from "../units/Footer";
import { isEmailInputOk, charactersLeft } from "../../utils/checkInputText";
import { syncWithLocalStorage, isUserRegistered } from "../../utils/localStorageUtils";
import { textInputsData, radioGenderData, radioFieldData, radioYearsData } from "../../assets/inputsData";
import { FormOuterContainer, FormInputContainer, BottomButtonsContainer, FirstFormGrid } from "./Form.styles";

function Form() {
    const CHAR_ALLOWED_DESC = 160;
    const [formData, setFormData] = useState(syncWithLocalStorage("savedData") || {
        name: "",
        email: "",
        city: "",
        country: "",
        description: "",
        gender: "def",
        avatarUrl: "",
        field: "def",
        yearsExp: "def",
        skills: []
    });

    const [inputErrors, setInputErrors] = useState( isUserRegistered("savedData") ?
        new Map([
            ["name", { error: false, visible: false }],
            ["email", { error: false, visible: false }],
            ["city", { error: false, visible: false }],
            ["country", { error: false, visible: false }],
            ["description", { error: false, visible: true }]
        ])
        :
        new Map([
            ["name", { error: true, visible: false }],
            ["email", { error: true, visible: false }],
            ["city", { error: false, visible: false }],
            ["country", { error: true, visible: false }],
            ["description", { error: false, visible: true }]
        ])
    );

    const topEl = useRef(null);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const formHasError = () => {
        let errorFound = false;
        const updatedErrors = new Map(inputErrors);
        inputErrors.forEach((value, key) => {
            if (value.error) {
                errorFound = true;
                updatedErrors.set(key, {error: true, visible: true});
            }
        });
        setInputErrors(updatedErrors);
        return errorFound;
    };

    const navigate = useNavigate(); 
    const goToPage = page => { 
        const path = `/${page}`; 
        navigate(path);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errorFound = formHasError();
        if (errorFound) {
            topEl.current.scrollIntoView();
            return;
        } else {
            localStorage.setItem("savedData", JSON.stringify(formData));
            goToPage("profile");
        }        
    };

    const checkOnBlur = e => {
        const field = e.target.name;
        if (field === "email") {
            const updatedErrors = new Map(inputErrors);
            if (!formData.email) {
                updatedErrors.set("email", { error: true, visible: true });
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
    };

    const handleInputChange = e => {
        if (e.target.type === "text" || e.target.type === "textarea" || e.target.type === "radio") {
            if (e.target.name === "gender") {
                setFormData(prevData => ({
                    ...prevData,
                    [e.target.name] : e.target.value,
                    avatarUrl: ""
                }));
            } else {
                setFormData(prevData => ({
                    ...prevData,
                    [e.target.name] : e.target.value
                }));
            }            
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
    };

    const handleAvatarChange = imgUrl => {
        setFormData(
            prevData => ({
                ...prevData,
                avatarUrl: imgUrl
            })
        );
    };

    const handleAddSkill = str => {
        setFormData(prevData => ({
            ...prevData,
            skills: [...prevData.skills, str]
        }));
    };

    const handleDeleteSkill = id => {
        const updatedSkills = formData.skills.filter((skill, i) => i !== id );
        setFormData(prevData => ({
            ...prevData,
            skills: updatedSkills
        }));
    };

    const handleDeleteAll = e => {
        e.preventDefault();
        localStorage.removeItem("savedData");
        goToPage("");
    };

    return(
        <>
            <FormOuterContainer onSubmit={handleSubmit} autoComplete="off">
                <Title text="Your Data"  forwardRef={topEl}/>
                <FormInputContainer>
                    <FirstFormGrid>
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
                    </FirstFormGrid>
                    <InputRadio 
                        name={radioFieldData.name}
                        options={radioFieldData.options}
                        value={formData.field}
                        question={radioFieldData.question}
                        onChange={handleInputChange}
                    />
                    <InputRadio 
                        name={radioYearsData.name}
                        options={radioYearsData.options}
                        value={formData.yearsExp}
                        question={radioYearsData.question}
                        onChange={handleInputChange}
                    />                    
                    <InputRadio
                        name={radioGenderData.name}
                        options={radioGenderData.options}
                        value={formData.gender}
                        question={radioGenderData.question}
                        infoText="we'll store it only for avatar creation"
                        onChange={handleInputChange}
                    />
                    <AvatarBox 
                        gender={formData.gender} 
                        onChange={handleAvatarChange} 
                        selectedImg={formData.avatarUrl}
                    /> 
                    <SkillsBox 
                        handleAddSkill={handleAddSkill} 
                        handleDeleteSkill={handleDeleteSkill} 
                        labels={formData.skills}
                    />                                   
                </FormInputContainer>
                <BottomButtonsContainer>
                    <Button 
                        text="Reset Form" 
                        onClick={handleDeleteAll} 
                        className={"button--delete-all"} 
                        dark={true}
                    />
                    <Button text="Save Data" onClick={handleSubmit} />
                </BottomButtonsContainer>
            </FormOuterContainer>
            <Footer />
        </>
    );
}

export default Form;