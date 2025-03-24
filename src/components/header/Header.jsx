import { Link } from "react-router-dom";
import NavBar from "../navigation/navbar/NavBar";
import styles from "./header.module.css"

function Header(){

    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Link to="/">AM</Link>
            </div>
            <NavBar />
        </div>
    )

}

export default Header;