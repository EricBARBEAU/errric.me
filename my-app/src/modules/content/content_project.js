// React stuff
import React, { Component } from 'react';
// Modules
import Project from './projects/project';

function Projects() {
  return (
    <div id="ProjectPage" className="pt-page pt-page-2">
      <div id="SideBar">
        <a className="pt-trigger pt-trigger_projects" data-animation="2" data-goto="-2"></a>
      </div> 
        < Project />
        <div className="noise-bg inset-0" aria-hidden="true">
          <svg>
            <filter id='noise-bg-fx'>
              <feTurbulence baseFrequency="0.8" numOctaves="1" type="fractalNoise"></feTurbulence>
            </filter>
          </svg>
        </div>
      
    </div>
  );
}

export default Projects;