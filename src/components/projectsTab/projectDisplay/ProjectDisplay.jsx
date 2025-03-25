import styles from "./projectDisplay.module.css"
import ProjectTemplate from "../projectTemplate/ProjectTemplate";
import projects from "../mockProjectData"


function ProjectDisplay(){


    return(
        <div className={styles.projectDisplayContainer}>

            <div className={styles.headingContainer}>
                <h1 className={styles.mainHeading}>Projects</h1>
            </div>

            <div className={styles.projectsContainer}>
                {projects && projects.map(project => {
                    return (<ProjectTemplate key={project.title} projectDisplayDetails={project} />)
                })}
            </div>
        

        </div>
    )

}

export default ProjectDisplay;