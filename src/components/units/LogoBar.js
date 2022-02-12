import { StyledBar, StyledLogo } from "./LogoBar.styles";
import logoMWC from "../../assets/MWC_big.png";
import logoBDT from "../../assets/BDT_big.png";

function LogoBar() {
    return(
        <StyledBar >
            <StyledLogo src={logoMWC} alt="Logo MWC words" alignLeft />
            <StyledLogo src={logoBDT} alt="Logo BDT words" />
        </StyledBar>
    );
}

export default LogoBar;