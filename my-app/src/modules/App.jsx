// React stuff
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Layout
import Layout from './_layout';
// Elements

// Views
import Home from './views/home';
import Projects from './views/projects';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/*Home*/}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
