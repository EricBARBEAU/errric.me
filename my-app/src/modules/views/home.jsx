// React stuff
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
// Components

// Elements
import Nav from '../elements/navbar';

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
        <Nav 
          isDark={true}
          isWhite={false}
        />
        Content of the new website
      </div>
    </>
  )
}

export default Home;
