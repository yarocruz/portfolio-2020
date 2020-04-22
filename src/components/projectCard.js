import React from 'react';
import { Link } from "gatsby"

import githubIcon from "../images/github-icon.svg";
import iconExternalLink from "../images/icon-external-link.svg";

import chevronRight from "../images/icon-cheveron-right.svg";

const projectCard = (props) => (
    <div className="relative px-6 py-8 bg-gray-100 rounded shadow-md">
        <div className="flex items-center justify-between mb-8">
            <h1 style={{ fontWeight: `600` }}>{props.title}</h1>
            <div className="flex">
                <a href="#"><img src={githubIcon} alt="github icon" /></a>
                <a href="#" className="ml-3"><img src={iconExternalLink} alt="github icon" /></a>
            </div>
        </div>
        <p className="mb-3">Project description that gives
        a bit more detail. Maybe another
        description here.</p>
        <p className="mb-10" style={{ fontWeight: `300`, fontStyle: `italic` }}>
            <span className="pr-5">React</span>
            <span className="pr-5">Nodejs</span>
            <span>Express</span>
        </p>
        <div className="absolute w-full bottom-0 right-0 bg-gray-200 text-center text-gray-600 py-3">
            <Link to="/projectname">Learn More</Link>
            {/* <img src={chevronRight} alt="chevron icon" /> */}
        </div>
    </div>
)

export default projectCard;