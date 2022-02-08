import { Link } from "react-router-dom";
import LogoBar from "../units/LogoBar";
import Title from "../units/Title";
import PlainIcon from "../units/PlainIcon";
import Button from "../units/Button";
import { HomeContainer, WelcomeContainer, StyledHomeP } from "./Home.styles";
import { HiOutlineThumbUp } from "react-icons/hi";

function Home() {
    return(
        <>
            <HomeContainer >
                <LogoBar />
                <WelcomeContainer>
                    <Title text="Welcome to MWC 22" />
                    <StyledHomeP>Do you want to showcase your talent?</StyledHomeP>
                    <StyledHomeP>Go ahead and create a profile!</StyledHomeP>
                    <PlainIcon size="24px">
                        <HiOutlineThumbUp />
                    </PlainIcon>
                    <Link to="/form-basic">
                        <Button text="NEW PROFILE" />
                    </Link>
                </WelcomeContainer>
            </HomeContainer>
        </>
    );
}

export default Home;