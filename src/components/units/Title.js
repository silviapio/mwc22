import {TitleText} from "./Title.styles";

function Title(props) {
    return(
            <TitleText>
                {props.text}
            </TitleText>
    )
    
}

export default Title;