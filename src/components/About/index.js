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
                
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I am a results driven software developer from virginia. I moved to colorado for school in 2018.
                        I am a results driven software developer from virginia. I moved to colorado for school in 2018</p>
                    <p>I am a results driven software developer from virginia. I moved to colorado for school in 2018I am a results driven software developer from virginia. I moved to colorado for school in 2018</p>
                    <p>I am a results driven software developer from virginia. I moved to colorado for school in 2018I am a results driven software developer from virginia. I moved to colorado for school in 2018</p>
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