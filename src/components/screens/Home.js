import LogoBar from "../units/LogoBar";
import Title from "../units/Title";
import { HomeContainer, WelcomeContainer } from "./Home.styles";

function Home() {
    return(
        <>
            <HomeContainer >
                <LogoBar />
                <WelcomeContainer>
                    <Title text="Welcome to MWC 22" />
                <p>control text</p>
                </WelcomeContainer>
            </HomeContainer>
        </>
    );
}

export default Home;