// Elements
import ProjectOne from "./p/project_one";
import ProjectTwo from "./p/project_two";
import ProjectThree from "./p/project_three";
import ProjectFour from "./p/project_four";
// Data
import data from "../../_data/data_projects-content.json";
// Functions
import renderWithBold from "../../functions/renderWithBold";
// Load assets based on Project
const blocksMap = {
  "project-01": ProjectOne,
  "project-02": ProjectTwo,
  "project-03": ProjectThree,
  "project-04": ProjectFour
};
const visualsMap = {
  "project-01": {
    icon: '/img/Projects/visadocs/visadocs_icon--small.png',
    hero: '/img/Projects/visadocs/visadocs-hero.png',
  },
  "project-02": {
    icon: '/img/Projects/jmr-visas/jmr_icon--small.png',
    hero: '/img/Projects/jmr-visas/jmr-hero.png',
  },
  "project-03": {
    icon: '/img/Projects/phl-chat/phl-chat_icon--small.png',
    hero: '/img/Projects/phl-chat/phl-chat-hero.png',
  },
  "project-04": {
    icon: '/img/Projects/phl-reactions/phl-reactions_icon--small.png',
    hero: '/img/Projects/phl-reactions/phl-reactions-hero.png',
  }
};

function ProjectRenderer({
  activeProject
}) {

	const project = data[activeProject];
	if (!project) return null;

	// Get the visual based on activeProject
	const visuals = visualsMap[activeProject] ?? {};
  const visualSrc = visuals.icon;
	const heroSrc = visuals.hero;

  return (
  	<>
	    <div className="project_renderer">
	    	<div
	        key={activeProject}
	        className={`project ${project.class} is-active`}
	      >
	    		<div className="project-title title_blk">
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
	    			<div className="project-specs grey-box">
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
	          <img src= {heroSrc} alt={project.alt} />
	        </div>
	    		<div className="project-blks">
	    			{(() => {
					    const Blocks = blocksMap[activeProject];
					    return Blocks ? <Blocks project={project} /> : null;
					  })()}
		    	</div>
	    	</div>
	    </div>
    </>
  )
}

export default ProjectRenderer;
