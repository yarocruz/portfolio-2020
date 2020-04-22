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
            <a href="#" className="mr-6">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="14.66" viewBox="0 0 15 14.66">
                    <path id="Path_1" data-name="Path 1" d="M143.812,107.408a7.5,7.5,0,0,0-2.371,14.62c.373.069.511-.166.511-.364v-1.276c-2.086.46-2.528-1-2.528-1a2.008,2.008,0,0,0-.833-1.1c-.677-.46.055-.46.055-.46a1.579,1.579,0,0,1,1.147.774,1.6,1.6,0,0,0,2.183.626,1.593,1.593,0,0,1,.46-1c-1.667-.189-3.417-.833-3.417-3.707a2.9,2.9,0,0,1,.769-2.012,2.731,2.731,0,0,1,.074-1.985s.631-.2,2.063.769a7.1,7.1,0,0,1,3.758,0c1.432-.972,2.058-.769,2.058-.769a2.717,2.717,0,0,1,.078,1.985,2.9,2.9,0,0,1,.769,2.012c0,2.883-1.754,3.513-3.426,3.684a1.773,1.773,0,0,1,.511,1.381c0,1,0,1.814,0,2.058s.134.433.516.364a7.506,7.506,0,0,0-2.376-14.62Z" transform="translate(-136.302 -107.38)" fill="#2b3139" fillRule="evenodd" />
                </svg>
            </a>
            <a href="#" className="mr-6">
                <img className="icon" src={linkedinIcon} alt="linkedin icon link" />
            </a>
            <a href="#">
                <img className="icon" src={twitterIcon} alt="twitter icon link" />
            </a>
        </div>
        <p className="my-5 leading-relaxed text-gray-800" style={{ fontWeight: `400`, fontSize: `18px`, maxWidth: `480px` }}>
            Hello I’m Yarosky, pronounced <span className="italic text-gray-700 font-bold">yah-roh-ski</span>, but you can call me Jay.
            I’m a Web Developer that’s well versed in both stacks and I have a background in Design.
            I’m a coder with empathy for the user. I love building web apps that are intuitive and a delight to use.</p>
    </div>
)

export default Intro
