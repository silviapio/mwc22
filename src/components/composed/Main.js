import LogoBar from "../units/LogoBar";
import { MainContainer } from "./Main.styles";

function Main({children}) {
    return(
        <MainContainer>
            <LogoBar />
            {children}
        </MainContainer>
    );
}

export default Main;