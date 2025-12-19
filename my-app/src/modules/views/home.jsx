// React stuff
import { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
// Elements
import Nav from '../elements/navbar';
// Assets
const avatar = '/img/avatar.png';
const graph_designer = '/img/graphics_landing--designer.svg';
const graph_developer = '/img/graphics_landing--developer.svg';
const graph_process = '/img/graphics_landing--process.png';
const chevron_green = '/img/graphics_chevron--green.svg';

function Home() {

  // Function for the avatar reveal
  const avatarRef = useRef(null);
  const [wandMode, setWandMode] = useState(false);
  const [wandLoading, setWandLoading] = useState(false);

  const toggleWandMode = (e) => {
    e.stopPropagation();

    // If already enabled → disable immediately
    if (wandMode) {
      setWandMode(false);
      return;
    }

    // Prevent double clicks
    if (wandLoading) return;

    // Start loading animation
    setWandLoading(true);

    setTimeout(() => {
      setWandLoading(false);
      setWandMode(true);
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (!wandMode) return;
    avatarRef.current.classList.add('is-hovered');
  };

  const handleMouseMove = (e) => {
    if (!wandMode) return;

    const rect = avatarRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    avatarRef.current.style.setProperty('--x', `${x}%`);
    avatarRef.current.style.setProperty('--y', `${y}%`);
  };

  const handleMouseLeave = () => {
    if (!wandMode) return;

    avatarRef.current.classList.remove('is-hovered');
    avatarRef.current.style.removeProperty('--x');
    avatarRef.current.style.removeProperty('--y');
  };

  return (
    <>
      <Helmet>
        <title>Eric Barbeau - Product Designer & Developer</title>
        <meta 
          name="description"
          content="Shipping quality web application since 2011."
        />
        <link rel="canonical" href="https://errric.me" />
      </Helmet>
      <div className="home">
        {/*Intro: Hi I'm Eric*/}
        <div className="home_intro">
          <div
            ref={avatarRef}
            className={`avatar_container ${wandMode ? 'wand_mode' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img className="avatar" src={avatar} alt="Avatar" />
             <div
                className={`
                  avatar_cta
                  ${wandMode ? 'wand_mode' : ''}
                  ${wandLoading ? 'is-loading' : ''}
                `}
                onClick={toggleWandMode}
              >
              <span className="wand">🪄</span>
            </div>
          </div>
          <div className="intro_content">
            <h1 className="intro_content-main">Hi! I’m Eric.</h1>
            <div className="intro_content-sub">
              <div className="sub_blk">
                <span>Designer</span>
                <img src={graph_designer} className="visual" alt="designer tools" />
              </div>
              <div className="sub_blk">
                <span>+ Developer</span>
                <img src={graph_developer} className="visual" alt="developer tools" />
              </div>
              <div className="sub_blk">
                <span className="since">— since 2011.</span>
              </div>
            </div>
          </div>
        </div>
        {/*Body: I design, code and ship*/}
        <div className="home_body">
          <div className="home_body-blk home_body-blk01">
            <div className="body_copy">
              <h3>
                <b className="highlight">I design, code, & ship</b> web interfaces — built around <b className="highlight">real human needs</b>.
              </h3>
            </div>
            <div className="body_copy">
              <h3>
                I <b className="highlight">test & validate ideas</b> by building <b className="highlight">in-browser prototypes</b> — not only mockups.
              </h3>
            </div>
            <div className="body_copy">
              <h3>
                I match the industry’s pace through an <b className="highlight">end-to-end approach:</b>
              </h3>
            </div>
          </div>
          <div className="home_body-blk home_body-blk02">
            <img src={graph_process} className="visual" alt="Design Process" />
            <div className="projects_cta" to="/projects" >
              <div className="blk">
                <div className="icons">
                  <div className="icon icon_1"></div>
                  <div className="icon icon_2"></div>
                  <div className="icon icon_3"></div>
                  <div className="icon icon_4"></div>
                </div>
                <Link className="cta" to="/projects" >
                  <img src={chevron_green} alt="Projects"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
