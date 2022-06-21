export default function Header(){
    return(
        <header>
            <span className="logo-container">
                <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="brand-logo"></img>
            </span>
        </header>

    )
}