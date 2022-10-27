import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";

const Work = () => {

    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <div className="container work-page" >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'e', 'v', 'i', 'o', 'u', 's',' ','W','o', 'r', 'k']}
                        idx={15}
                    />
                </h1>
                <p>I'm currently working on this page. Like really... I'm probably on my dev branch right now :) </p>
                <p>As of 10/27/22</p>

            </div>
        </div>)
}

export default Work;