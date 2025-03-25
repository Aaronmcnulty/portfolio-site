import styles from "./homeDisplay.module.css"

function HomeDisplay(){

    return(
        <div className={styles.homeContainer} >
            <h1 className={styles.introHeading}>
                Hello, I'm <span title="Pronounced: ah-run" className={styles.name}>Aaron</span>.
            </h1>
            <h2 className={styles.welcomeHeading}>
                Welcome to my portfolio...
            </h2>
        </div>
    )
}

export default HomeDisplay;