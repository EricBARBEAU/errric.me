// React stuff
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
// Elements
import Nav from '../elements/navbar';
// Assets
const chevron_grey = '/img/graphics_chevron--grey.svg';
// Data
import data from "../../_data/data_projects-navigation.json";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Eric Barbeau - Product Designer & Developer</title>
        <meta 
          name="description"
          content="Projects made by Eric Barbeau"
        />
        <link rel="canonical" href="https://errric.me/projects" />
      </Helmet>
    	<div className="projects">
    		{/*Intro + Projects selection*/}
        <div className="projects_intro">
          <h1 className="intro_content-main">📚 Projects</h1>
          <div className="intro_content-sub">
            Since 2011, I’ve been 
            <b> applying my skills on meaningful projects </b> 
            and 
            <b> collaborating with incredible people </b> 
            along the way.
          </div>
          <div className="intro_grid">
            {data.map((item, index) => (
              <div className={`project ${item.class}`} >
                <div className="project_visual"></div>
                <div className="project_content">
                  <div className="title">
                    {item.title}
                    <span className="date">{item.year}</span>
                  </div>
                  <div className="body">
                    {item.body}
                  </div>
                </div>
                <a className="project_cta">
                  <img src={chevron_grey} alt={item.title}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/*Project showcase*/}
        <div className="projects_body">
        </div>
    	</div>
    </>
  )
}

export default Projects;
