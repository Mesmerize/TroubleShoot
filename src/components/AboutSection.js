import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import Me from '../img/mecirc.png'

const AboutSection = () => {
    return (
        <section>
            <div className='flex-container'>
                {/* Beginning of Heading Elements */}
                <div>
                    <div className='line flex-child'></div>
                </div>
                <div className='flex-child'>
                    <Link to={{pathname: "https://www.linkedin.com/in/mesmerize/"}} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className='example linkedin' />
                    </Link>
                    
                    <Link to={{pathname: "https://www.github.com/mesmerize"}} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size='2x' className='example github icon-space' />
                    </Link>

                    <Link to={{pathname: "https://discord.gg/gpr6tU7W"}} target="_blank">
                        <FontAwesomeIcon icon={faDiscord} size='2x' className='example discord icon-space' />
                    </Link>
                </div>
                {/* End of Heading Elements */}
            </div>
            {/* Beginning of Content Section */}
            <div className='content-section'>
                <h1 className='intro'>
                    <span>Welcome, My Name is Brandon.</span>
                    <br />
                    <span>Front End <span className='blue'>Developer</span> and</span>
                    <br />
                    <span>Student.</span>
                </h1>
                <p className='interest'>
                    <span>I Like To Build Solid and Scalable Front End Based Products That</span>
                    <br />
                    <span> Add on Great User Experiences.</span>
                </p>
                {/* Experimental */}
                <div className='buttons'>
                    <a href="" className='space'><button id='btn'>RÈSUMÈ</button></a>
                    <a href="#contact-section" className='space'><button id='btn'>CONTACT ME</button></a>
                </div>
                {/* End of Experimental */}
                <div className='image-section'>
                    <img className='img-edit' src={Me} alt="" />
                </div>
            </div>
            {/* End of Content Secton */}
        </section>
    )
}

export default AboutSection
