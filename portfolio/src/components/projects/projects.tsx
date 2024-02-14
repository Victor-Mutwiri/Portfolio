import project from '../../projects.json'
import './projects.css'

export const Projects = () => {
  return (
    <div className="projects" id="projects">
        <h3>Projects</h3>
        <div className="project">
            {project && project.map(project =>{
                return(
                    <div className="project-card">
                        <img src={project.image} alt="project" />
                        <h4>{project.project}</h4>
                        <p>{project.description}</p>
                        <div className="skillz">
                            {project.skill.map((skill, index) => (
                                <div className="card" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <a href={project.live}>View Live</a>
                        <a href={project.github}>View Code</a>
                    </div>
                )
                })} 
        </div>
    </div>
  )
}
