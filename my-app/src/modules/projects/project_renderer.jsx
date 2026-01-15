// React stuff
// Elements
// Data
import data from "../../_data/data_projects-content.json";

function ProjectRenderer({
  activeProject
}) {

	const project = data[activeProject];

	if (!project) return null;

  return (
  	<>
	    <div className="project_renderer">
	    	<div
	        key={activeProject}
	        className={`project ${project.class} is-active`}
	      >
	    		<div className="project-title">
	    			<span className="line"></span>
	    			<div>
	    				<img className="visual" alt={project.alt} />
	    				<div className="title">
                {project.alt}
                <span className="date">{project.year}</span>
              </div>
              <div className="body">
                {project.main_title}
              </div>
	    			</div>
	    		</div>
	    		<div className="project-intro">
	    			Intro
	    		</div>
	    		<div className="project-visual">
	    			<img alt={project.alt}/>
	    		</div>
	    		<div className="project-blks">
		    		<div className="blk blk_objective">
		    			Objective
		    		</div>
		    		<div className="blk blk_process">
		    			Process
		    		</div>
		    		<div className="blk blk_challenge">
		    			Challenge
		    		</div>
		    		<div className="blk blk_delivery">
		    			Delivery
		    		</div>
		    	</div>
	    	</div>
	    </div>
    </>
  )
}

export default ProjectRenderer;
