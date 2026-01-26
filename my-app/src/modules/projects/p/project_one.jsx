import renderWithBold from "../../../functions/renderWithBold";

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
      </div>

      <div className="blk blk_challenge">Challenge</div>

      <div className="blk blk_delivery">Delivery</div>
    </>
  );
}

export default ProjectOne;