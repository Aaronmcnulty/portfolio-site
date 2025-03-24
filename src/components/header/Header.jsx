import NavBar from "../navigation/navbar/NavBar";
import styles from "./header.module.css"

function Header(){

    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <p>AM</p>
            </div>
            <NavBar />
        </div>
    )

}

export default Header;