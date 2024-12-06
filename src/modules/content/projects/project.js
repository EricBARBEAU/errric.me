import React, { Component } from 'react';

import data from "./project_data.json";

function Project() {
    return (
      <div id="ProjectsWrapper">
        {data.map((item) => (
          <article className={item.id}>
              <div className="project-content">
                <span>{item.month}</span><b>{item.year}</b>
                <h2>{item.title}</h2>
                <p>{item.paragraph_01}</p>
                <p>{item.paragraph_02}</p>
                <a href={item.link} className="button" target="_blank" rel="noreferrer">Learn more</a>
              </div>
              <div className="project-visual" dangerouslySetInnerHTML={ { __html: item.video } }>
              </div>
          </article>
        ))}
      </div>
    );
  }

export default Project;