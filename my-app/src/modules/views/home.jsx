// React stuff
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
// Elements
import Nav from '../elements/navbar';
// Assets
const avatar = '/img/avatar.png';
const graph_designer = '/img/graphics_landing--designer.svg';
const graph_developer = '/img/graphics_landing--developer.svg';
const graph_process = '/img/graphics_landing--process.png';

function Home() {
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
      <div className="view view_home">
        <div className="container">
          {/*Nav*/}
          <Nav 
            isDark={true}
            isWhite={false}
          />
          <div className="home">
            {/*Intro: Hi I'm Eric*/}
            <div className="home_intro">
              <img className="avatar" src={avatar} />
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
              </div>
              <div className="home_body-blk home_body-blk02">
                <img src={graph_process} className="visual" alt="Design Process" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
