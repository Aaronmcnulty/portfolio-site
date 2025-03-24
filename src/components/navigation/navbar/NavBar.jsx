import { Link } from "react-router-dom";
import styles from "./navBar.module.css"

function NavBar(){

    return(
        <div className={styles.navBarContainer}>
            <Link className={styles.navBarLink} to="/">Home</Link>
            <Link className={styles.navBarLink} to="about">About</Link>
            <Link className={styles.navBarLink} to="projects">Projects</Link>
            <Link className={styles.navBarLink} to="contact">Contact</Link>
        </div>
    )
}

export default NavBar;