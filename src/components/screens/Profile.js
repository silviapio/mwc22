import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../units/Title";
import ProfileItem from "../units/ProfileItem";
import AvatarImg from "../units/AvatarImg";
import Label from "../units/Label";
import Button from "../units/Button";
import Footer from "../units/Footer";
import { syncWithLocalStorage } from "../../utils/localStorageUtils";
import { radioGenderData, radioFieldData, radioYearsData, profileDescriptionText } from "../../assets/inputsData";
import { ProfileOuterContainer, SkillsContainer, ProfileErrorContainer, ProfileInnerContainer, ButtonContainer } from "./Profile.styles";


function Profile() {
    const [profileData, setProfileData] = useState(syncWithLocalStorage("savedData") || "");
    
    const getRadioText = (savedValue, optionsArr) => {
        return optionsArr.find(item => item.id === savedValue).text;
    };

    useEffect(()=> {
        if (!profileData) {
            return;
        }
        const genderText = getRadioText(profileData.gender, radioGenderData.options);
        const fieldText = getRadioText(profileData.field, radioFieldData.options);
        const yearsText = getRadioText(profileData.yearsExp, radioYearsData.options);
        setProfileData(prevData => ({
            ...prevData,
            gender: genderText,
            field: fieldText,
            yearsExp: yearsText
        }));
    }, [])

    const getProfileDataItems = () => {
        return profileDescriptionText.map((item, i) => {
            let text;
            if (!profileData[item.key]) {
                text = "---";
            } else if (item.key === "skills") {
                text = "";
            } else {
                text = profileData[item.key];
            }
            return <ProfileItem key={i} descText={item.text} dataText={text} />
        });
    };   

    const getProfileLabels = () => {
        if (!profileData) {
            return;
        }
        if (profileData.skills.length === 0) {
            return <p>---</p>
        } else {
            return profileData.skills.map((skill, i) => <Label key={i} text={skill} canBeDeleted={false}/>);
        }
    };

    return(
        <>
        <ProfileOuterContainer>
            <ProfileInnerContainer>
            <Title text="Profile Summary" className="title--profile"/>
            { profileData ?
                <>
                    <AvatarImg avatarSvg={profileData.avatarUrl} />
                    {getProfileDataItems()}
                    <SkillsContainer>
                    {getProfileLabels()}
                    </SkillsContainer>
                    <ButtonContainer>
                    <Link to="/form">
                        <Button text="Back and Edit" />
                    </Link>
                    </ButtonContainer>
                </>
                : 
                <>
                    <ProfileErrorContainer>
                    <p>Sorry, no data available</p>
                    <p>¯\_(ツ)_/¯</p>
                    <Link to="/">
                        <Button text="Back to Home" />
                    </Link>
                    </ProfileErrorContainer>
                </>
            }
            </ProfileInnerContainer>
            <Footer className="footer--profile"/>
        </ProfileOuterContainer>
        
        </>
    );
}

export default Profile;