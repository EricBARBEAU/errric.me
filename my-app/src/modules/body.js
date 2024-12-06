// Modules import
import Home from './content/content_home';
import Projects from './content/content_project';

function Body() {
  return (
    <div id="ContentWrapper" className="pt-wrapper">
    	<Home />
      <Projects />
    </div>
  );
}

export default Body;