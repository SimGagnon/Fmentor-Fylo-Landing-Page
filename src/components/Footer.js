import React from 'react';
import FyloLogo from "../assets/logo.svg";
import "../scss/_footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconLocation from "../assets/icon-location.svg"
import IconPhone from "../assets/icon-phone.svg"
import IconEmail from "../assets/icon-email.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={FyloLogo} />
            </div>
            <div className="container">
                <div className="footer__location footer__item">
                    <img src={IconLocation} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <div className="footer__contact footer__item">
                        <img src={IconPhone} alt="" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="footer__item">
                        <img src={IconEmail} alt="" />
                        <p>example@fylo.com</p>
                    </div>
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
            </div>
        </footer>
    )
}

export default Footer
