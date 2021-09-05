import React from 'react';
import FyloLogo from "../assets/logo.svg";
import "../scss/_footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={FyloLogo} />
            </div>
            <div className="footer__nav">
                <ul>
                    <li>About us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="footer__socials">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </footer>
    )
}

export default Footer
