import styles from "./projectDisplay.module.css"
function ProjectDisplay(){


    return(
        <div className={styles.projectDisplayContainer}>

            <div className={styles.headingContainer}>
                <h1 className={styles.mainHeading}>Projects</h1>
               
            </div>


            <div className={styles.projectsContainer}>
                <div className={styles.project} >
                    
                    <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>
                    <img alt="A pic"></img>
                </div>
                <div className={styles.project} >
                <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>  
                    <img alt="A pic"></img>
                </div>
                <div className={styles.project} >
                <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>   
                    <img alt="A pic"></img>
                </div>
                <div className={styles.project} >
                <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>   
                    <img alt="A pic"></img>
                </div>
                <div className={styles.project} >
                <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>  
                    <img alt="A pic"></img>
                </div>
                <div className={styles.project} >
                <div>
                        <h3>Project 1</h3>
                        <p>It is a project...</p>
                    </div>   
                    <img alt="A pic"></img>
                </div>
            </div>
        </div>
    )

}

export default ProjectDisplay;