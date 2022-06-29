import * as React from "react"

import "./AboutMe.scss";
import Dog from "../../images/dog.jpg";

function AboutMe() {
    return (
        <section id="about" className="about-me-section">
            <h2 className="numbered-heading">About Me</h2>
            <div className="inner">
                <div className="about-left">
                    <div>
                        <p>Hello! My name is Robert. Back in 2015 I was a professional e-sports player, and ever since then I have fallen in love with learning. The mental side of being a professional player has provided me a unique perspective on the motivation and dedication to learn, and perfect my craft.</p>
                        <p>Fast-forwarding to today, my main focus and passion is building accessible, inclusive products and digital experiences. I’ve had the privilege of working amongst insightful and knowledgable colleagues that have allowed me to continually challenge the way I assess tasks when navigating complicated goals.</p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>
                    <ul className="skills-list">
                        <li>
                            JavaScript (ES6+)
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Node
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Django
                        </li>
                    </ul>
                </div>
                <div className="about-right">
                    <div className="wrapper">
                        <div className="img-container">
                            <img height="500" width="500" sizes="(min-width: 500px) 500px, 100vw" src={Dog} srcSet="" alt="Headshot" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;