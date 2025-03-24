import { Link } from "react-router-dom";

function NavBar(){

    return(
        <div>
            <Link to="projects">Projects</Link>
            <Link to="about">About</Link>
        </div>
    )
}

export default NavBar;