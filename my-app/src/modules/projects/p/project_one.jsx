// Functions
import renderWithBold from "../../../functions/renderWithBold";
// Assets
const img_process = '/img/Projects/visadocs/visadocs_process.png';

function ProjectOne({ project }) {
  return (
    <>
      {/*🎯 Objective*/}
      <div className="blk blk_objective">
        <div className="objective-title title_blk">
          <span className="line" />
          <div className="title-container">
            <div className="title typ-title-sub">
              <span className="icon">🎯</span>
              The objective
            </div>
            <div className="body typ-title-main">
              {project.objective_title}
            </div>
          </div>
        </div>
        <div className="txt-blk">
          <p>{renderWithBold(project.objective_intro)}</p>
          <div className="features">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature_blk ${feature.class}`}
              >
                <div className="visual"></div>
                <div className="body">
                  <h3 className="title">{feature.title}</h3>
                  <p className="content">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*🗺️ Process*/}
      <div className="blk blk_process">
        <div className="process-title title_blk">
          <span className="line" />
          <div className="title-container">
            <div className="title typ-title-sub">
              <span className="icon">🗺️</span>
              The process
            </div>
            <div className="body typ-title-main">
              {project.process_title}
            </div>
          </div>
        </div>
        <div className="txt-blk">
          <img className="visual_process" src={img_process} alt="Visadocs Process" />
        </div>
      </div>

      {/*🚧 Challenge*/}
      <div className="blk blk_challenge">
        <div className="challenge-title title_blk">
          <span className="line" />
          <div className="title-container">
            <div className="title typ-title-sub">
              <span className="icon">🚧</span>
              The project’s biggest challenge
            </div>
            <div className="body typ-title-main">
              {project.challenge_title}
            </div>
          </div>
        </div>
        <div className="txt-blk">
        </div>
      </div>

      {/*🚀 Delivery*/}
      <div className="blk blk_delivery">
        <div className="delivery-title title_blk">
          <span className="line" />
          <div className="title-container">
            <div className="title typ-title-sub">
              <span className="icon">🚀</span>
              The delivery
            </div>
            <div className="body typ-title-main">
              {project.delivery_title}
            </div>
          </div>
        </div>
        <div className="txt-blk">
        </div>
      </div>
    </>
  );
}

export default ProjectOne;