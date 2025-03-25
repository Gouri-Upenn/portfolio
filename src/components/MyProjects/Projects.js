
import React from 'react'
import './projects.css'
import project1 from '../../assets/proj1.png'
import project2 from '../../assets/proj2.png'
import project3 from '../../assets/proj3.png'

function Projects() {
    return (
            <div className='projectImages'>
                <a href="https://github.com/Gouri-Upenn/MovieMetrics/blob/main/MovieMetrics_A_Data_Driven_Approach_to_IMDB_Ratings.ipynb" target="_blank" rel="noopener noreferrer">
                    <img src={project1} alt="Project1" className='project1' />
                </a>
                <a href="https://github.com/Gouri-Upenn/portfolio" target="_blank" rel="noopener noreferrer">
                    <img src={project2} alt="Project2" className='project1' />
                </a>
                <a href="https://github.com/Gouri-Upenn/Portfolio-Light-dark-mode" target="_blank" rel="noopener noreferrer">
                    <img src={project3} alt="Project2" className='project1' />
                </a>


            </div>




    )
}

export default Projects;
