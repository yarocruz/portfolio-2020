import React from "react"

import profilePic from "../images/profile-pic.png";
import githubIcon from "../images/github-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";
import twitterIcon from "../images/twitter-icon.svg";

import "../assets/tailwind.css"

const Intro = () => (
    <div className="intro">
        <img src={profilePic} alt="profile" style={{ marginLeft: `-20px` }} />
        <h1 style={{ fontWeight: `900`, fontSize: `38px` }}>Yarosky Cruz</h1>
        <h2 style={{ fontWeight: `500`, fontSize: `24px` }}>Web Developer</h2>
        <div className="iconLinks flex items-center my-2">
            <a href="#" className="mr-6"><img src={githubIcon} alt="github icon link" /></a>
            <a href="#" className="mr-6"><img src={linkedinIcon} alt="linkedin icon link" /></a>
            <a href="#"><img src={twitterIcon} alt="twitter icon link" /></a>



        </div>
        <p className="my-5 leading-relaxed text-gray-800" style={{ fontWeight: `400`, fontSize: `18px`, maxWidth: `480px` }}>Hello I’m Yarosky, pronounced yah-roh-ski, but you can call me Jay. I’m a Web Developer that’s well versed in both stacks and I have a background in Design.
    I’m a coder with empathy for the user. I love building web apps that are intuitive and a delight to use.</p>
    </div>
)

export default Intro
