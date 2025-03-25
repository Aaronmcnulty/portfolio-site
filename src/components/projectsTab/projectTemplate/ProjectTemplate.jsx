import styles from "./projectTemplate.module.css"

function ProjectTemplate({projectDisplayDetails}){

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h3 className={styles.projectTitle}>
                    {projectDisplayDetails.title}
                </h3>
            </div>
            <div className={styles.projectDescription}>
                <p>
                    {projectDisplayDetails.description}
                </p>
            </div>

            <img className={styles.projectImage} alt="Project Screeshot">
            
            </img>
        </div>
    )
}

export default ProjectTemplate;