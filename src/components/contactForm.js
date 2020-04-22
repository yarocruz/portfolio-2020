import React from 'react';

import githubIcon from "../images/github-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";
import twitterIcon from "../images/twitter-icon.svg";

const contactForm = () => (
    <div className="contact">
        <h1 className="secondary-heading">Contact</h1>
        <div className="iconLinks flex items-center my-2">
            <a href="#" className="mr-6"><img src={githubIcon} alt="github icon link" /></a>
            <a href="#" className="mr-6"><img src={linkedinIcon} alt="linkedin icon link" /></a>
            <a href="#"><img src={twitterIcon} alt="twitter icon link" /></a>
        </div>
        <p className="font-bold my-3">Have a job for me? Want to ask me something?</p>
        <form className="max-w-md">
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" value="enter your name" />
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" value="type in an email" />
            <textarea className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="7" cols="10" id="message" type="text" value="be brief or be funny" />
            <button className="shadow bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white text-sm py-2 px-4 rounded" type="button">
                Hit me Up
            </button>
        </form>
    </div>
)

export default contactForm;