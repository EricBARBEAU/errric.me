import renderWithBold from "../../../functions/renderWithBold";

function ProjectTwo({ project }) {
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

      <div className="blk blk_process">Process</div>
      <div className="blk blk_challenge">Challenge</div>
      <div className="blk blk_delivery">Delivery</div>
    </>
  );
}

export default ProjectTwo;