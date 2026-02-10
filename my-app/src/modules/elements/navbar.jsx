// Imports
import { NavLink, useNavigate } from "react-router-dom";
// Assets
const logo_dark = '/img/errric-logo_dark.svg';
const logo_white = '/img/errric-logo_white.svg';
const icon_breadcrumb = 'img/breadcrumb.svg';

function Nav({ origin }) {

  const resume_url = "https://assets.errric.me/files/EricBARBEAU_Resume2025.pdf";

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" alt="Home">
        <img src={origin == "home" ? logo_dark : origin == "projects" ? logo_white : logo_dark} className="logo_img" alt="errric.me" />
      </NavLink>
      { origin == "projects" &&
        <div className="breadcrumbs">
          <NavLink to="/" className="backlink" href="https://errric.me/" alt="Home">HOME</NavLink>
          <img src={icon_breadcrumb} alt="breadcrumb" />
          <div className="active_page">
            📚 PROJECTS
          </div>
        </div>
      }
      <ul className="navbar_menu">
        {origin == "home" && 
          <li className="navbar_menu-item navbar_menu-item--projects" >
            <NavLink to="/projects" className="link" alt="Projects">📚 Projects</NavLink>
          </li>
        }
        <li className="navbar_menu-item navbar_menu-item--playground" >
          <NavLink to="https://playground.errric.me" className="link" target="_blank" alt="Playground">📟 Playground</NavLink>
        </li>
        <li className="navbar_menu-item navbar_menu-item--photos" >
          <NavLink to="https://photo.errric.me" className="link" target="_blank" alt="Photos">📷 Photos</NavLink>
        </li>
        <li className="navbar_menu-sep">
          //
        </li>
        <li className="navbar_menu-item navbar_menu-item--download" >
          <a className="link link_download" href={resume_url} target="_blank" download >💾 Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;