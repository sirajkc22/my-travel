import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="footer-basic">
        <footer>
            <div className="social"><a href="https://www.instagram.com/"><BsInstagram/><i className="icon ion-social-linked-in"></i></a><a href="https://www.linkedin.com/"><BsLinkedin/> <i class="icon ion-social-twitter"></i></a><a href="ttps://www.twitter.com/"><BsTwitter/><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Destination</a></li>
                <li className="list-inline-item"><a href="#">contact</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Travel Wonders © 2022</p>

</footer>
    </div>
    </div>
  )
}

export default Footer;