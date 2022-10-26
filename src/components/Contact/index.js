import { useState, useEffect, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const formRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_c8hjfkr', 'contact_form', formRef.current, 'h7SVFDTNqT1bqjM2s')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        If you could use a self-motivated and curious mind like mine, please fill out the contact form and you will hear back shortly!
                    </p>
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="from_name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="from_email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className="info-map">
                    Evan Swett
                    <br /> <br/>
                    1350 Speer Blvd Unit 408
                    <br />
                    Denver, CO 80204
                    <br />
                    <span>swett10@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[39.7392, -104.9903]} zoom={9} >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[39.7392, -104.9903]}>
                            <Popup>
                                I live here in the mile high city!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-grid-beat" />
        </>
    )
}
export default Contact