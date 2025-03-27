import React from 'react';
import './Project.css';
import projects from '../../assets/mywork_data';

const Project = () => {
  return (
    <div id='project' className='mywork'>
      <div className='mywork-title'>
        <h1>My Projects</h1>
      </div>
      <div className='mywork-container'>
        {projects.map((work, index) => (
          <a key={index} href={work.link} target='_blank' rel='noopener noreferrer'>
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
