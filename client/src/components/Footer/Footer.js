import React from 'react';
import {FaInstagram,FaFacebook,FaLinkedin,FaGithubAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer =()=>{
    return(
        <>
        <div className="footer">
        <ul>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaFacebook /></Link></li>
            <li><Link to="#"><FaLinkedin /></Link></li>
            <li><Link to="#"><FaGithubAlt /></Link></li>
        </ul>
        </div>
        </>
    )
}

export default Footer;