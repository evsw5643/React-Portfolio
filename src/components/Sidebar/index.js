import './index.scss'
import LogoS from "../../assets/images/logo-s.png";
import LogoSub from "../../assets/images/logo_sub.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img className="logo" src={LogoS} alt="logo"></img>
                <img className="sub-logo" src={LogoSub} alt="logo_sub"></img>
            </Link>
            <nav>
                <NavLink exact={true} activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact={true} activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact={true} activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://www.linkedin.com/in/evan-s-a99201a8/">
                        <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" ></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://github.com/evsw5643">
                        <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" ></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;