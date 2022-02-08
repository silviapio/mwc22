import { StyledBar, StyledLogo } from "./LogoBar.styles";
import logoMWC from "../../assets/MWC.png";
import logoBDT from "../../assets/BDT.png";

function LogoBar() {
    return(
        <StyledBar >
            <StyledLogo src={logoMWC} alt="Logo MWC words" alignLeft />
            <StyledLogo src={logoBDT} alt="Logo BDT words" />
        </StyledBar>
    );
}

export default LogoBar;