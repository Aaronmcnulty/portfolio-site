import styles from "./projectDisplay.module.css"
function ProjectDisplay(){


    return(
        <div className={styles.projectDisplayContainer}>

            <div className={styles.headingContainer}>
                <h1 className={styles.mainHeading}>Projects</h1>
            </div>

            <div className={styles.projectsContainer}>
                <div>project 1</div>
                <div>project 2</div>
                <div>project 3</div>
                <div>project 4</div>
                <div>project 5</div>
                <div>project 6</div>
            </div>
        </div>
    )

}

export default ProjectDisplay;