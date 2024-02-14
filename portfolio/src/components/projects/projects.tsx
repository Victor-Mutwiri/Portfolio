import project from '../../projects.json'
import './projects.css'

export const Projects = () => {
    const handleLiveButtonClick = (liveLink:string) => {
        window.location.href = liveLink;
      };
  return (
    <div className="projects" id="projects">
        <h3>Projects</h3>
        <div className="project">
            {project && project.map(project =>{
                return(
                    <div className="project-card">
                        <img src={project.image} alt="project" />
                        <h4>{project.Title}</h4>
                        <p>{project.description}</p>
                        <div className="skillz">
                            {project.skill.map((skill, index) => (
                                <div className="card" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleLiveButtonClick(project.live)}>Live</button>
                        <button onClick={() => handleLiveButtonClick(project.github)}>Code</button>
                    </div>
                )
                })} 
        </div>
    </div>
  )
}
