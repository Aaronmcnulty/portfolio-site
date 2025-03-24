import NavBar from "../navigation/NavBar";

function Header(){

    return(
        <div className="header-container">
            <NavBar />
            <div className="logo-container">
                <p>logo</p>
            </div>
        </div>
    )

}

export default Header;