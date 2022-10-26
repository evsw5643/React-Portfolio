import './index.scss'
import gsap from "gsap";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import ESLogo from '../../../assets/images/ESyellow.png';
import ESLogoOutline from "../../../assets/images/ESLogoOutline.svg"
import { useEffect, useRef } from "react";
import { TimelineMax } from 'gsap/gsap-core';
import { TimelineLite } from 'gsap/gsap-core';

const Logo = () => {

    const leftOutlineRef = useRef();
    const rightOutlineRef = useRef();
    const containerRef = useRef();
    const solidLogoRef = useRef();



    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);
        gsap.timeline().to(containerRef.current, {
            duration: 1,
            opacity: 1
        })
            .fromTo(leftOutlineRef.current,
                {
                    drawSVG: "0%",
                },
                {  
                    delay: 2.5,
                    duration: 20,
                    drawSVG: "100%",
                }
            )
            .fromTo(rightOutlineRef.current,
                {
                    drawSVG: "0%",
                },
                {
                    duration: 20,
                    drawSVG: "100%"
                },
                4
            )

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 2
            },
            7
        )
    }, [])

    return (
        <div className='logo-container' ref={containerRef} >
            <img ref={solidLogoRef} className='solid-logo' src={ESLogo} alt={"S"} />
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="800.000000pt"
                height="800.000000pt"
                viewBox="0 0 800.000000 800.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    className='svg-container'
                    transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)"
                    fill="none"
                >
                    <path
                        ref={leftOutlineRef}
                        d="M1760 7506 c-151 -105 -421 -292 -600 -416 -179 -123 -389 -268 -467 -322 l-143 -99 0 -908 0 -909 218 -153 c119 -84 393 -277 607 -428 215 -151 452 -319 529 -373 76 -54 139 -97 140 -96 0 2 0 297 -2 656 l-2 652 -195 0 -195 0 0 -260 c0 -143 -3 -260 -7 -260 -4 0 -16 8 -27 19 -12 10 -166 120 -344 245 l-323 226 0 240 0 241 430 -1 431 0 0 215 0 216 -431 -1 -431 -2 1 219 0 218 133 96 c231 166 552 394 560 397 4 2 8 -114 8 -257 l0 -261 195 0 195 0 0 408 c0 225 3 517 7 650 4 144 3 242 -3 241 -5 -1 -133 -87 -284 -193z m243 -473 c-4 -411 -9 -580 -17 -585 -19 -13 -271 -9 -284 4 -9 9 -12 75 -12 233 0 206 -1 224 -20 245 -14 16 -26 21 -43 16 -20 -5 -132 -80 -287 -192 -19 -14 -111 -79 -205 -145 -93 -66 -182 -133 -197 -150 l-28 -29 0 -224 c0 -214 1 -224 21 -242 20 -18 46 -19 428 -24 l406 -5 3 -159 c2 -121 -1 -161 -10 -168 -7 -4 -190 -8 -407 -8 -391 0 -395 0 -418 -22 -23 -21 -23 -23 -23 -263 l0 -241 32 -31 c18 -17 139 -105 268 -195 334 -234 413 -288 424 -288 5 0 20 10 33 22 23 21 23 24 23 243 0 158 3 224 12 233 13 13 252 18 282 6 14 -6 16 -67 16 -591 0 -486 -2 -584 -13 -580 -11 4 -646 448 -812 567 -22 16 -154 109 -294 207 -139 98 -262 189 -272 202 -18 23 -19 56 -19 895 1 669 3 875 13 887 7 8 57 46 112 84 55 38 177 122 270 187 94 64 224 154 290 200 65 46 176 122 245 169 69 47 199 138 290 202 91 63 172 116 181 116 15 1 16 -46 12 -576z" />
                    <path ref={rightOutlineRef} d="M2470 6605 l0 -1095 555 0 555 0 0 -222 0 -223 -358 -236 -357 -236 -3 299 -2 298 -195 0 -195 0 0 -697 c0 -662 1 -695 18 -681 16 15 704 495 1250 872 l232 161 0 537 0 538 -555 0 -555 0 0 505 0 504 108 -69 c59 -39 220 -141 357 -228 l250 -158 1 -167 2 -168 193 0 194 0 0 262 0 262 -260 182 c-143 99 -395 275 -560 390 -165 115 -383 266 -483 337 -101 70 -186 128 -188 128 -2 0 -4 -493 -4 -1095z m228 893 c982 -683 1209 -842 1220 -856 13 -17 18 -370 6 -431 l-7 -32 -146 3 -146 3 -5 146 c-4 109 -9 151 -20 164 -16 20 -97 74 -315 210 -77 48 -178 113 -225 143 -167 109 -204 120 -228 66 -9 -18 -12 -163 -12 -500 l0 -476 29 -29 29 -29 520 0 c447 0 521 -2 525 -15 10 -24 7 -963 -2 -987 -5 -13 -46 -49 -92 -81 -46 -32 -192 -134 -324 -226 -132 -92 -307 -214 -390 -271 -82 -57 -176 -122 -207 -144 -31 -23 -93 -66 -138 -96 -44 -30 -117 -81 -162 -113 -45 -31 -85 -54 -90 -49 -4 4 -7 287 -6 628 l3 619 150 0 150 0 5 -271 c5 -289 8 -304 55 -304 31 0 676 421 720 470 18 20 20 39 23 227 4 218 -1 251 -41 272 -16 8 -175 12 -542 14 l-520 2 -3 1015 c-1 558 0 1021 3 1029 7 19 21 12 183 -101z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo;