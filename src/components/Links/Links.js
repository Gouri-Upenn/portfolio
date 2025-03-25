import React from 'react'
import './links.css'
import githubDark from '../../assets/github-dark.png'
import LinkedInDark from '../../assets/lkin-dark - Copy.png'

const Links = () => {
    return (
        <section>
            <div className='links'>
                <a href="https://github.com/Gouri-Upenn" target="_blank" rel="noopener noreferrer">
                    <img src={githubDark } alt="GitHub" className='gitHubImage' />
                </a>
                <a href="https://www.linkedin.com/in/gouri-c/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInDark} alt="LinkedIn" className='LinkedInImage' />
                </a>

            </div>
        </section>
    )
}

export default Links;