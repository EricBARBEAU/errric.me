// React stuff
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
// Elements
import Nav from '../elements/navbar';
// Assets

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
    		Projects Page
    	</div>
    </>
  )
}

export default Projects;
