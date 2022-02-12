import {TitleText} from "./Title.styles";

function Title({forwardRef, ...props}) {
    return(
            <TitleText ref={forwardRef}>
                {props.text}
            </TitleText>
    )
    
}

export default Title;