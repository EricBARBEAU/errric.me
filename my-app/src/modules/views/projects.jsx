// React stuff
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
// Elements
import Nav from '../elements/navbar';
import ProjectRenderer from '../projects/project_renderer';
// Assets
const chevron_grey = '/img/graphics_chevron--grey.svg';
// Data
import dataNav from "../../_data/data_projects-navigation.json";
import dataPush from "../../_data/data_projects-push.json";

function Projects() {

  const [activeProject, setActiveProject] = useState('project-01');

  const toggleProjectView = (projectId) => {
    if (projectId === activeProject) return;
    setActiveProject(projectId);
  };

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
          <h1 className="intro_content-main"><span>📚</span>Projects</h1>
          <div className="intro_content-sub typ-title-main">
            Since 2011, I’ve been 
            <b> applying my skills on meaningful projects </b> 
            and 
            <b> collaborating with incredible people </b> 
            along the way.
          </div>
          <div className="intro_grid">
            {dataNav.map((item, index) => (
              <div
                key={item.id} 
                className={`project ${item.class} ${
                  activeProject === item.id ? 'is-active' : ''
                }`}
                onClick={() => toggleProjectView(item.id)}
              >
                <div className="project_visual"></div>
                <div className="project_content">
                  <div className="title typ-title-sub">
                    {item.title}
                    <span className="date">{item.year}</span>
                  </div>
                  <div className="body">
                    {item.body}
                  </div>
                </div>
                <a
                  className="project_cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProjectView(item.id);
                  }}
                >
                  <img src={chevron_grey} alt={item.title}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/*Project showcase*/}
        <div className="projects_body">
          <div className="project_container">
            <ProjectRenderer 
              activeProject={activeProject} 
            />
          </div>
        </div>
        {/*Other projects CTAs*/}
        <div className="projects_push">
          <div className="title typ-title-sub">
            <span className="icon">📚</span>
            Discover my other projects
          </div>
          <div className="push_blks">
            {dataPush.map((item, index) => (
              <div
                key={item.id} 
                className={`blk ${item.class} ${
                  activeProject === item.id ? 'hidden' : ''
                }`}
              >
                <div className="blk_title">
                  <h3>{item.title}</h3>
                </div>
                <div className="blk_hero"></div>
                <div className="blk_info">
                  <div className="left">
                    <div className="visual"></div>
                    <div className="name_date">
                      <p className="name">{item.name}</p>
                      <span className="date">{item.year}</span>
                    </div>
                  </div>
                  <div className="cta">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    	</div>
    </>
  )
}

export default Projects;
