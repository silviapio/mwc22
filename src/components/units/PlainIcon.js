import { IconContext } from "react-icons/lib";

function PlainIcon({children, size, color}) {
    return(
        <IconContext.Provider value={{ color, size}}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    )
}

export default PlainIcon;