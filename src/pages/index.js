import React from "react"

import Intro from "../components/intro";
import ProjectCard from "../components/projectCard";
import ContactForm from "../components/contactForm";

import { Helmet } from "react-helmet";

import "../assets/tailwind.css"

import Blog from "../images/blog.png";
import RSPLS from "../images/rspls-screenshot.png";
import Burger from "../images/burger-screenshot.png";
import WeatherDashboard from "../images/weather-dashboard-screenshot.png";
import CodeQuiz from "../images/code-quiz-screenshot.png";
import employeeDirectory from "../images/employee-directory.png";

const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/svf5gcp.css" />
    </Helmet>

    <div className="container text-gray-900 mx-auto mx-10 my-10">
      <div className="p-6">
        <Intro />

        <h1 className="mb-5 secondary-heading text-blue-900">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            img={Blog}
            title="Blog"
            githubLink="https://github.com/yarocruz/yarocruz.github.io/tree/v2"
            demoLink="https://yarocruz.netlify.app/"
            description="This is my blog. There are many like it. But this one is mine."
            tech={["Eleventy", "Static Site Generator"]}
            pageRoute="/blog/"
          />
          <ProjectCard
            img={RSPLS}
            title="RPSLS"
            githubLink="https://github.com/yarocruz/rpsls"
            demoLink="https://yarocruz.github.io/rpsls/"
            description="An expanded adaptation of the Game Rock, Paper, Scissors built with Vue.js"
            tech={["Vue", "CSS"]}
            pageRoute="/rpsls/"
          />
          <ProjectCard
            img={employeeDirectory}
            title="Employee Directory"
            githubLink="https://github.com/yarocruz/react-employee-directory/"
            demoLink="https://yarocruz.github.io/react-employee-directory/"
            description="React application that lets you quickly view and sort employees."
            tech={["React", "Tailwindcss"]}
            pageRoute="/employee-directory/"
          />
          <ProjectCard
            img={Burger}
            title="Eat Da Burger"
            githubLink="https://github.com/yarocruz/eat-da-burger"
            demoLink="https://aqueous-beyond-86348.herokuapp.com/"
            description="Full stack web application that lets you add burgers and then devour them like an animal."
            tech={["Express", "MySQL", "Bootstrap"]}
            pageRoute="/eatDaBurger/"
          />
          <ProjectCard
            img={WeatherDashboard}
            title="Weather Dashboard"
            githubLink="https://github.com/yarocruz/weather-dashboard"
            demoLink="https://yarocruz.github.io/weather-dashboard/"
            description="Front end web application that uses OpenWeatherMap's API to fetch weather data."
            tech={["jQuery", "Bootstrap"]}
            pageRoute="/weatherDashboard/"
          />
          <ProjectCard
            img={CodeQuiz}
            title="Code Quiz"
            githubLink="https://github.com/yarocruz/code-quiz"
            demoLink="https://yarocruz.github.io/code-quiz/"
            description="Quiz app, specifically a code quiz app that tests your knowdlege on web development."
            tech={["HTML", "CSS", "Vanilla JS"]}
            pageRoute="/codeQuiz/"
          />
        </div>

        <ContactForm />
      </div>
    </div>
  </div>

)

export default IndexPage
