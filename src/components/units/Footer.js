import { StyledFooter, StyledLinks } from "./Footer.styles";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from "react-icons/ai";

function Footer(props) {
    return(
        <StyledFooter className={props.className}>
            <StyledLinks>
                <a href="https://github.com/silviapio"><AiFillGithub/></a>
                <a href="https://twitter.com/silvia_piov"><AiOutlineTwitter/></a>
                <a href="https://www.linkedin.com/in/silvia-piovesan"><AiFillLinkedin/></a>
            </StyledLinks>
            <small>coded by Silvia for 4YFN-MWC22 hackathon</small>
        </StyledFooter>
    );
}

export default Footer;