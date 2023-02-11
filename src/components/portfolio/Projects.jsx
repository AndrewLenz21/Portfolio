import React from 'react'


// Constants
import { images } from '../../constants';
const Projects = () => {

  return (
    <div className="projects__container">

        {/*
        FOR ADD ONE PROJECT:
        Add:
        -style={{backgroundImage:`url(${images."yourprojectimage"})`}}
        -onClick={() => window.open('your_link_to_your_project', '_blank', 'noreferrer')}

        Change:
        - project__title: Project
        - project__description: Features project
        */}


        {/* Project container */}
        <div className="project__content" style={{backgroundImage:`url(${images.projectmaxsushi})`}} onClick={() => window.open('https://max-sushi.com/', '_blank', 'noreferrer')}>
            <div className="title__container">
                <h3 className="project__title">Max Sushi</h3>
            </div>
            <div className="project__data">
                <span className="project__description">
                    Web for a  chinese restaurant
                </span>
            </div>
        </div>

        {/* Project container */}
        <div className="project__content">
            <div className="title__container">
                <h3 className="project__title">Project</h3>
            </div>
            <div className="project__data">
                <span className="project__description">
                    Features project
                </span>
            </div>
        </div>

        {/* Project container */}
        <div className="project__content">
            <div className="title__container">
                <h3 className="project__title">Project</h3>
            </div>
            <div className="project__data">
                <span className="project__description">
                    Features project
                </span>
            </div>
        </div>

        {/* Project container */}
        <div className="project__content">
            <div className="title__container">
                <h3 className="project__title">Project</h3>
            </div>
            <div className="project__data">
                <span className="project__description">
                    Features project
                </span>
            </div>
        </div>

        

    </div>
  )
}

export default Projects