import {TitleText} from "./Title.styles";

function Title({forwardRef, ...props}) {
    return(
            <TitleText ref={forwardRef} className={props.className}>
                {props.text}
            </TitleText>
    )
    
}

export default Title;