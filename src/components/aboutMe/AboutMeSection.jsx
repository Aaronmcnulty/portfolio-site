import styles from "./aboutMeSection.module.css"

function AboutMeSection(){

    return(
        <div className={styles.AboutMeContainer}>
           
           <div className={styles.HeadingContainer}>
                <h1 className={styles.mainHeading}>
                    About
                </h1>
           </div>

            <div className={styles.aboutTextContainer}>
                <p> Blah</p>
                <p> blah</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam cursus diam turpis, nec pellentesque tortor convallis non.
                    Praesent fringilla non diam non tempus. </p>
            </div>
        </div>
    )
}

export default AboutMeSection