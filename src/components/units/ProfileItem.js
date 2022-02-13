import {ItemDescription, ItemData} from "./ProfileItem.styles";

function ProfileItem({descText, dataText}) {
    return(
        <>
            <ItemDescription>
                {descText}
            </ItemDescription>
            {dataText && <ItemData>{dataText}</ItemData>}
        </>
    );
}

export default ProfileItem;