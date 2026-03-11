import renderWithBold from "../../../functions/renderWithBold";
// Assets
const img_process = '/img/Projects/phl-chat/phl-chat_process.png';

function ProjectThree({ project }) {
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
          <p>{renderWithBold(project.objective_part1)}</p>
          <p>{renderWithBold(project.objective_part2)}</p>
        </div>
      </div>
      {/*🎯 Objective*/}

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
          <img className="visual_process" src={img_process} alt="Pigeonhole Live Chat Process" />
        </div>
      </div>
      {/*🗺️ Process*/}

      <div className="blk blk_process">Process</div>
      <div className="blk blk_challenge">Challenge</div>
      <div className="blk blk_delivery">Delivery</div>
    </>
  );
}

export default ProjectThree;