// Functions
import renderWithBold from "../../../functions/renderWithBold";
// Assets
const img_process = '/img/Projects/visadocs/visadocs_process.png';
const img_itinerary = '/img/Projects/visadocs/visadocs_itinerary.svg';

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
                className={`grey-box feature_blk ${feature.class}`}
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
          {project.challenge.map((item, index) => (
              <div 
                key={index}
                className="challenge" 
              >
                <h3 className="main_title">{item.main_title}</h3>
                <div className="challenge_intro">
                  <div className="intro_left">
                    <p>{renderWithBold(item.intro_part1)}</p>
                    <p>{renderWithBold(item.intro_part2)}</p>
                  </div>
                  <img className="intro_visual" src={img_itinerary} alt="travel itinerary" />
                </div>
                <div className="challenge_blocks">
                  <div className="blk blk_one grey-box">
                    <h4>{item.blk1_intro}</h4>
                    <div className="blk_content">
                      <p>{renderWithBold(item.blk1_part1)}</p>
                      <p>{renderWithBold(item.blk1_part2)}</p>
                    </div>
                  </div>
                  <div className="blk blk_two grey-box">
                    <h4>{item.blk2_intro}</h4>
                    <div className="blk_content">
                      <p>{renderWithBold(item.blk2_part1)}</p>
                      <p>{renderWithBold(item.blk2_part2)}</p>
                    </div>
                  </div>
                </div>
                <div className="challenge_outro">
                  <p className="outro_sm">{item.outro_small}</p>
                  <p className="outro_lg">{item.outro_main}</p>
                </div>
              </div>
            ))}
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
        <div className="delivery_content">
          <div className="txt-blk">
            <p className="delivery_p">{renderWithBold(project.delivery_par1)}</p>
            <p className="delivery_p">{renderWithBold(project.delivery_par2)}</p>
            <p className="delivery_p">{renderWithBold(project.delivery_par3)}</p>
            <p className="delivery_outro">To 🏗 build and 🚀 ship web applications.</p>
          </div>
          <div className="grey-box">
            <div className="links">
              <h4>More about this project</h4>
              <a 
                href="" 
                target="_blank"
              >
                Create your travel itinerary with visadocs.ai in 7 steps
              </a>
              <a 
                href="" 
                target="_blank"
              >
                Visadocs on Product Hunt
              </a>
            </div>
            <div className="cta">
              <a 
                href="https://visadocs.ai" 
                target="_blank"
              >
                visadocs.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;