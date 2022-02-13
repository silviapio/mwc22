import { RadioCheck, RadioContainer, RadioLabel, RadioAllOptionsContainer, RadioOptionContainer, RadioP, StyledSmallMessage } from "./InputRadio.styles";

function InputRadio({name, options, value, question, infoText, onChange}) {
    const showOptions = options.map((option, i) => {
        const checked = option.id === value || "";
        return (
        <RadioOptionContainer key={i}>
            <RadioCheck 
                type="radio" 
                name={name} 
                id={option.id} 
                value={option.id} 
                checked={checked} 
                onChange={onChange} 
            />
            <RadioLabel htmlFor={option.id}>{option.text}</RadioLabel>
        </RadioOptionContainer>
        );
    });

    return(
        <RadioContainer>
            <RadioP>
                {question}
            </RadioP>
            <RadioAllOptionsContainer>
                {showOptions}
            </RadioAllOptionsContainer>
            <StyledSmallMessage>
                {infoText}
            </StyledSmallMessage>
        </RadioContainer>
    );
}

export default InputRadio;