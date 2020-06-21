import React from 'react';

const contactForm = () => (
    <div className="contact">
        <h1 className="secondary-heading">Contact</h1>
        <h2>yarocruz@gmail.com</h2>
        <div className="iconLinks flex items-center my-2">
            <a href="https://github.com/yarocruz" className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15.66" viewBox="0 0 15 14.66">
                    <path className="icon" id="Path_1" data-name="Path 1" d="M143.812,107.408a7.5,7.5,0,0,0-2.371,14.62c.373.069.511-.166.511-.364v-1.276c-2.086.46-2.528-1-2.528-1a2.008,2.008,0,0,0-.833-1.1c-.677-.46.055-.46.055-.46a1.579,1.579,0,0,1,1.147.774,1.6,1.6,0,0,0,2.183.626,1.593,1.593,0,0,1,.46-1c-1.667-.189-3.417-.833-3.417-3.707a2.9,2.9,0,0,1,.769-2.012,2.731,2.731,0,0,1,.074-1.985s.631-.2,2.063.769a7.1,7.1,0,0,1,3.758,0c1.432-.972,2.058-.769,2.058-.769a2.717,2.717,0,0,1,.078,1.985,2.9,2.9,0,0,1,.769,2.012c0,2.883-1.754,3.513-3.426,3.684a1.773,1.773,0,0,1,.511,1.381c0,1,0,1.814,0,2.058s.134.433.516.364a7.506,7.506,0,0,0-2.376-14.62Z" transform="translate(-136.302 -107.38)" fill="#2b3139" fillRule="evenodd" />
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/yarosky-cruz/" className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <path className="icon" id="icons8-linkedin" d="M16.333,3H4.667A1.666,1.666,0,0,0,3,4.667V16.333A1.666,1.666,0,0,0,4.667,18H16.333A1.666,1.666,0,0,0,18,16.333V4.667A1.666,1.666,0,0,0,16.333,3ZM6.948,14.667h0A1.052,1.052,0,0,1,5.9,13.615V9.884A1.053,1.053,0,0,1,6.948,8.833h0A1.052,1.052,0,0,1,8,9.885v3.731A1.051,1.051,0,0,1,6.948,14.667Zm-.037-6.9a1,1,0,0,1-1.072-1,1.019,1.019,0,0,1,1.142-1,1,1,0,0,1,1.072,1A1.019,1.019,0,0,1,6.912,7.764Zm7.571,6.9h0a1.018,1.018,0,0,1-1.017-1.017V11.478c0-.882-.542-.978-.746-.978s-.882.029-.882.978v2.171a1.018,1.018,0,0,1-1.018,1.018h-.067a1.018,1.018,0,0,1-1.018-1.017V9.885a1.052,1.052,0,0,1,1.052-1.052h0a1.052,1.052,0,0,1,1.052,1.052s.235-1.052,1.832-1.052c1.016,0,1.83.814,1.83,2.645v2.171A1.018,1.018,0,0,1,14.482,14.667Z" transform="translate(-3 -3)" fill="#2b3139" />
                </svg>
            </a>
            <a href="https://twitter.com/JayCruz">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.188" viewBox="0 0 15 12.188">
                    <path className="icon" id="icons8-twitter" d="M15,3.438a5.678,5.678,0,0,1-1.75.5,3.326,3.326,0,0,0,1.375-1.689A5.7,5.7,0,0,1,12.688,3a3.272,3.272,0,0,0-2.312-1A3.067,3.067,0,0,0,7.312,5.062a2.312,2.312,0,0,0,.063.688A8.55,8.55,0,0,1,1.062,2.562,2.69,2.69,0,0,0,.625,4.124,3.134,3.134,0,0,0,2,6.688,4.445,4.445,0,0,1,.625,6.312v.063a3.034,3.034,0,0,0,2.437,3,3.209,3.209,0,0,1-.811.125,1.714,1.714,0,0,1-.564-.063,2.967,2.967,0,0,0,2.876,2.126A6.249,6.249,0,0,1,.75,12.874,3.11,3.11,0,0,1,0,12.813a8.757,8.757,0,0,0,4.688,1.375,8.67,8.67,0,0,0,8.75-8.75V5.062A6.417,6.417,0,0,0,15,3.438" transform="translate(0 -2)" fill="#2b3139" />
                </svg>
            </a>
        </div>
        <p className="font-bold my-3">Have a job for me? Want to ask me something?</p>
        <form className="max-w-md" action="https://formspree.io/xzbanwlp" method="POST">
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" id="inline-full-name" type="text" placeholder="enter your name" />
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="_replyto" id="email" type="text" placeholder="type in an email" />
            <textarea className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-2 text-gray-500 italic leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="7" cols="10" name="message" id="message" type="text" placeholder="be brief or be funny" />
            <button className="shadow bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white text-sm py-2 px-4 rounded" type="submit">
                Hit me Up
            </button>
        </form>
    </div>
)

export default contactForm;