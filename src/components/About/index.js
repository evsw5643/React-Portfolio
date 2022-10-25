import './index.scss'
import '../../App.scss'
import Loader from "react-loaders"

import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <div>
            <div className='container about-page'>
                <div className='about-cont'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I graduated from the University of Colorado in August 2022 with a bachelors degree 
                        in computer science and a minor in business. My interest in programming has always been 
                        on the visual side; I love to create art by incorporating algorithms and math. However, I 
                        never thought of myself as a computer scientist. It wasn't until my senior year of high school
                        when a special teacher of mine urged me to give it a shot. I've always been interested in art, math, and 
                        problem solving, but didn't really know which route to go. When I learned that I could incorporate those interests
                        into computer science, I was sold.
                        </p>
                    <p>In between my junior and senior year of college, I was taken on by Phood. A small startup 
                        based out of Boulder, CO that gave me the opportunity to put some of my skills to use in a
                         professional setting for the first time. I was given the title of "Front End Developer" and
                          tasked with building and maintaining an internal dashboard for the sales team to visualize 
                          their customer data with. I used React, jQuery, Node.js, Javascript, HTML, CSS, and several 
                          Javascript libraries for animations and graphs. It was a great first experience working with stakeholders,
                          designers, and a senior engineer that I hope to bring the knowledge I gained there to my next role.</p>
                    <p>I have a multitide of interests outside of software. I originally moved to Colorado for the
                        amazing snowboarding. I used to compete nationally when I was younger but now I'm just focused on having fun
                        and staying safe! In the warmer months I exchange my snowboarding riding for motorcycle riding. It offers me
                        a freedom that I have been unable to find elsewhere. Whenever I'm feeling like clearing my head I always find
                         myself on my motorcycle. That is only if it's running! I do all of the maintanence on my 42 year old motorcycle myself so
                         it's never a gurantee that it starts up. I love the process of identifying why it may not be starting and getting to the bottom
                         of it. It very much reminds me of programming in that way.
                    </p>
                </div>
                </div>
                

                <div className='stage-cube-cont' >
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color="#43853D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJava} color="#3A75B0" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-grid-beat"/>
        </ div>
    )
}

export default About;