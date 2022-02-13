import { StyledFooter, StyledLinks } from "./Footer.styles";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiTwotoneMail } from "react-icons/ai";

function Footer(props) {
    return(
        <StyledFooter className={props.className}>
            <StyledLinks>
                <a href="https://github.com/silviapio"><AiFillGithub/></a>
                <a href="https://twitter.com/silvia_piov"><AiOutlineTwitter/></a>
                <a href="https://www.linkedin.com/in/silvia-piovesan"><AiFillLinkedin/></a>
                <a href="mailto:silvia.piovesan@gmail.com"><AiTwotoneMail/></a>
            </StyledLinks>
            <p>coded by Silvia for 4YFN-MWC22 hackathon</p>
            <p>all graphics are for mock-up purposes and imply no endorsement or property</p>
        </StyledFooter>
    );
}

export default Footer;