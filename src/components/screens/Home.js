import { Link } from "react-router-dom";
import Title from "../units/Title";
import PlainIcon from "../units/PlainIcon";
import Button from "../units/Button";
import { isUserRegistered } from "../../utils/localStorageUtils";
import { WelcomeContainer, StyledHomeP } from "./Home.styles";
import { HiOutlineThumbUp } from "react-icons/hi";

function Home() {
    const userRegistered = isUserRegistered("savedData");

    return(
        <>
                <WelcomeContainer>
                    { userRegistered ? 
                        <>
                        <Title text="Welcome Back!" />
                        <StyledHomeP>Click below to see your profile</StyledHomeP>
                        <StyledHomeP>( ͡° ͜ʖ ͡°)_/¯</StyledHomeP>
                        </>
                        :
                        <>
                        <Title text="Welcome to MWC 22" />
                        <StyledHomeP>Do you want to showcase your talent?</StyledHomeP>
                        <StyledHomeP>Go ahead and create a profile!</StyledHomeP>
                        <PlainIcon size="24px">
                        <HiOutlineThumbUp />
                        </PlainIcon>
                        </>
                    }
                    
                    <Link to={userRegistered ? "/profile" : "/form"}>
                        <Button text={userRegistered ? "SEE PROFILE" : "NEW PROFILE"} />
                    </Link>
                </WelcomeContainer>
        </>
    );
}

export default Home;