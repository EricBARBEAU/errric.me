// Data
import data from "../../_data/data_projects-content.json";
// Functions
import renderWithBold from "../../functions/renderWithBold";
// Assets
const visual_visadocs = '/img/Projects/visadocs/visadocs_icon--small.png';
const visual_jmr = '/img/Projects/jmr-visas/jmr_icon--small.png';
const visual_phlchat = '/img/Projects/phl-chat/phl-chat_icon--small.png';
const visual_phlreact = '/img/Projects/phl-reactions/phl-reactions_icon--small.png';
// Map project IDs to visuals
const visualsMap = {
  "project-01": visual_visadocs,
  "project-02": visual_jmr,
  "project-03": visual_phlchat,
  "project-04": visual_phlreact
};

function ProjectRenderer({
  activeProject
}) {

	const project = data[activeProject];
	if (!project) return null;

	// Get the visual based on activeProject
  const visualSrc = visualsMap[activeProject] || '';

  return (
  	<>
	    <div className="project_renderer">
	    	<div
	        key={activeProject}
	        className={`project ${project.class} is-active`}
	      >
	    		<div className="project-title">
	    			<span className="line"></span>
	    			<div className="title-container">
	    				<div className="project-name">
		    				<div className="visual">
				          <img src={visualSrc} alt={project.alt} />
				        </div>
		    				<div className="title typ-title-sub">
	                {project.alt}
	                <span className="date">{project.year}</span>
	              </div>
	            </div>
              <div className="body typ-title-main">
                {project.main_title}
              </div>
	    			</div>
	    		</div>
	    		<div className="project-intro">
	    			<div className="intro-text txt-blk">
	    				<p>{renderWithBold(project.intro_part1)}</p>
							<p>{renderWithBold(project.intro_part2)}</p>
							<p>{renderWithBold(project.intro_part3)}</p>
	    			</div>
	    			<div className="project-specs">
	    				<div className="specs specs-type">
	    					<span className="label">📚 TYPE</span>
	    					{project.specs_type}
	    				</div>
	    				<div className="specs specs-role">
	    					<span className="label">🧑‍💻 ROLE</span>
	    					{project.specs_role}
	    				</div>
	    				<div className="specs specs-tools">
	    					<span className="label">🔨 TOOLS</span>
	    					{project.specs_tools}
	    				</div>
	    				<div className="specs specs-stack">
	    					<span className="label">⚙️ STACK</span>
	    					{project.specs_stack}
	    				</div>
	    			</div>
	    		</div>
	    		<div className="project-hero">
	          <img alt={project.alt} />
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
