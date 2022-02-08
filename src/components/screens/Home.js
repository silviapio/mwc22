import { Link } from "react-router-dom";
import Title from "../units/Title";
import PlainIcon from "../units/PlainIcon";
import Button from "../units/Button";
import { WelcomeContainer, StyledHomeP } from "./Home.styles";
import { HiOutlineThumbUp } from "react-icons/hi";

function Home() {
    return(
        <>
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
        </>
    );
}

export default Home;