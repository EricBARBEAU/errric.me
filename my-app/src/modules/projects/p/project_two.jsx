import renderWithBold from "../../../functions/renderWithBold";

// Assets
const jmr_logo = "/img/Projects/jmr-visas/jmr_icon--small.png";
const video_testimonials = "/vid/jmr-testimonials.webm";

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
          <p>{renderWithBold(project.process_part1)}</p>
          <p>{renderWithBold(project.process_part2)}</p>
          <p>{renderWithBold(project.process_part3)}</p>
        </div>
      </div>
      {/*🗺️ Process*/}

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
          <div className="challenge">
            <h3 className="main_title">{project.challenge_main_title}</h3>

            <div className="intro">
              <p>{renderWithBold(project.challenge_part1)}</p>
              <p>{renderWithBold(project.challenge_part2)}</p>
            </div>
            
            <video
              autoPlay
              loop
              muted
              playsInline
              width="80%"
            >
              <source src={video_testimonials} type="video/webm" />
              Your browser does not support the video tag
            </video>

            <div className="challenge_outro">
              <p className="outro_sm">
                {project.challenge_outro_small}
              </p>
              <p className="outro_lg">
                {project.challenge_outro_main}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*🚧 Challenge*/}

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

        <div className="delivery_content">
          <div className="txt-blk">
            <p className="delivery_p">
              {renderWithBold(project.delivery_part1)}
            </p>
            <p className="delivery_p">
              {renderWithBold(project.delivery_part2)}
            </p>
            <p className="delivery_p">
              {renderWithBold(project.delivery_part3)}
            </p>

            <p className="delivery_outro">
              To 🏗 build trust-driven and 🚀 conversion-focused web platforms.
            </p>
          </div>

          <div className="delivery_links grey-box">
            <div className="links">
              <h4>More about this project</h4>
              <a
                href="https://jmrvisas.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit jmrvisas.com
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Educational visa content on YouTube
              </a>
            </div>

            <div className="cta">
              <a
                href="https://jmrvisas.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={jmr_logo}
                  alt="JMR Visa Services logo"
                  className="icon"
                />
                jmrvisas.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*🚀 Delivery*/}
    </>
  );
}

export default ProjectTwo;