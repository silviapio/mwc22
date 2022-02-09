import Title from "../units/Title";
import InputText from "../units/InputText";
import { FormOuterContainer, FormInputContainer } from "./FormBasic.styles";

function FormBasic() {
    const textInputsData = [
        {
            id: "name",
            labelText: "Full name",
            placeholderText: "ex: Anna Martinez",
            messageText: "name can't be empty",
        },
        {
            id: "email",
            labelText: "Email",
            placeholderText: "ex: youremail@gmail.com",
            messageText: "please enter a valid email",
            checkOnBlur: true
        },
        {
            id: "city",
            labelText: "City",
            placeholderText: "ex: Barcelona",
        },
        {
            id: "country",
            labelText: "Country",
            placeholderText: "ex: Spain",
            messageText: "country can't be empty",
        }
    ];

    const checkEmail = () => {
        console.log("check email")
    }

    return(
        <>
            <FormOuterContainer>
                <Title text="Basic Data" />
                <FormInputContainer>
                    {textInputsData.map((input, i) => 
                        <InputText
                            key={i}
                            left="left"
                            id={input.id} 
                            labelText={input.labelText}
                            placeholderText={input.placeholderText}
                            messageText={input.messageText}
                            onBlur={input.checkOnBlur && checkEmail}
                        />
                    )}
                </FormInputContainer>

            </FormOuterContainer>
        </>
    );
}

export default FormBasic;