import { isMobile } from "react-device-detect";
export default function Hero(){
    return(
        <span id="hero-image">
            <img src={process.env.PUBLIC_URL + "/images/" +  (isMobile ? "hero-mobile.jpg" : "hero-desktop.jpg")} alt="hero"></img>
        </span>
    )
}