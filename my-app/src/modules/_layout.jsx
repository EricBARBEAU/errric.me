import { useLocation } from "react-router-dom";
// Elements
import Nav from './elements/navbar';
// Views
import Home from './views/home';
import Projects from './views/projects';

function Layout() {

  const location = useLocation();
  // Determine which page is active
  const isProjects = location.pathname === "/projects";

  return (
    <div className="viewport">
      <div className="slide_container" >
        {/* Home */}
        <div 
          className={`view view_home ${!isProjects ? "active" : ""}`}
        >
          <div className="container">
            <Nav 
              isDark={true}
              isWhite={false}
            />
            <Home /> 
          </div>
        </div>

        {/* Projects */}
        <div 
          className={`view view_projects ${isProjects ? "active" : ""}`}
        >
          <div className="container">
            <Nav 
              isDark={false}
              isWhite={true}
            />
            <Projects />

            {/*Footer here*/}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Layout;