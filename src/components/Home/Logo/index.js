import './index.scss'
import ESLogo from '../../../assets/images/ESyellow.png';

const Logo = () => {

    

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin);
    //     gsap.timeline().to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1
    //     })
    //     .from(outlineLogoRef.current, {
    //         drawSVG:2,
    //         duration: 20
    //     })

    //     gsap.fromTo(
    //         solidLogoRef.current, 
    //         {
    //             opacity: 0,
    //         },
    //         {
    //             opacity: 1,
    //             delay: 4,
    //             duration: 4
    //         }
    //     )
    // },[])

    return (
        <div className='logo-container' >
            <img className='solid-logo' src={ESLogo} alt={"S"} />
        </div>
    )
}

export default Logo;