import { StyledBar, StyledLogo } from "./LogoBar.styles";
import logoMWC from "../../assets/images/MWC_big.png";
import logoBDT from "../../assets/images/BDT_big.png";

function LogoBar() {
    return(
        <StyledBar >
            <StyledLogo src={logoMWC} alt="Logo MWC words" alignLeft />
            <StyledLogo src={logoBDT} alt="Logo BDT words" />
        </StyledBar>
    );
}

export default LogoBar;