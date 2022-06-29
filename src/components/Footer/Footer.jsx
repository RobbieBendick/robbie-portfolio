import * as React from "react"

import "./Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <div>
                    <a href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-github"></i></a>
                </div>
                <div>
                    <a href="mailto:robbiebendick@gmail.com"><i class="fa-solid fa-xl fa-envelope"></i></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/robert-bendick-7ad/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-linkedin"></i></a>
                </div>
            </div>
            <p>Created by Robert Bendick</p>
            <small class="with-react">(with React)</small>
        </footer>
    )
}

export default Footer;