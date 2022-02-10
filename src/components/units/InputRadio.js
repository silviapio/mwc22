import { RadioCheck, RadioContainer, RadioLabel, RadioAllOptionsContainer, RadioOptionContainer, RadioP, StyledSmallMessage } from "./InputRadio.styles";

function InputRadio({name, options, value, question, infoText}) {
    const showOptions = options.map(option => {
        const checked = option.id === "def";
        return (<RadioOptionContainer>
            <RadioCheck type="radio" name={name} id={option.id} value={option.id} checked = {checked}/>
            <RadioLabel htmlFor={option.id}>{option.text}</RadioLabel>
            </RadioOptionContainer>)
    });

    return(
        <RadioContainer>
            <RadioP>{question}</RadioP>
            <RadioAllOptionsContainer>
                {showOptions}
            </RadioAllOptionsContainer>
            <StyledSmallMessage>{infoText}</StyledSmallMessage>
        </RadioContainer>
    );
}

export default InputRadio;