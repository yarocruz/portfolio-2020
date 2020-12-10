import React from "react"

import Intro from "../components/intro";
import ProjectCard from "../components/projectCard";
import ContactForm from "../components/contactForm";

import { Helmet } from "react-helmet";

import "../assets/tailwind.css"

const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/svf5gcp.css" />
    </Helmet>

    <div className="container text-gray-900 mx-auto mx-10 my-10">
      <div className="p-6">
        <Intro />

        <h1 className="mb-5 secondary-heading">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="RPSLS"
            githubLink="https://github.com/yarocruz/rpsls"
            demoLink="https://yarocruz.github.io/rpsls/"
            description="Rock, Paper, Scissors, Lizard, Spock."
            tech={["Vue", "CSS"]}
            pageRoute="/rpsls/"
          />
          <ProjectCard
            title="Channel"
            githubLink="https://github.com/yarocruz/channel"
            demoLink="https://yarocruz.github.io/channel/"
            description="Rss Reader web app built with React."
            tech={["React", "Chakra UI"]}
            pageRoute="/channel/"
          />
          <ProjectCard
            title="Employee Directory"
            githubLink="https://github.com/yarocruz/react-employee-directory/"
            demoLink="https://yarocruz.github.io/react-employee-directory/"
            description="React application that lets you quickly view and sort employees."
            tech={["React", "Tailwindcss"]}
            pageRoute="/employee-directory/"
          />
          <ProjectCard
            title="Eat Da Burger"
            githubLink="https://github.com/yarocruz/eat-da-burger"
            demoLink="https://aqueous-beyond-86348.herokuapp.com/"
            description="Full stack web application that lets you add burgers and then devour them like an animal."
            tech={["Express", "MySQL", "Bootstrap"]}
            pageRoute="/eatDaBurger/"
          />
          <ProjectCard
            title="Weather Dashboard"
            githubLink="https://github.com/yarocruz/weather-dashboard"
            demoLink="https://yarocruz.github.io/weather-dashboard/"
            description="Front end web application that uses OpenWeatherMap's API to fetch weather data."
            tech={["jQuery", "Bootstrap"]}
            pageRoute="/weatherDashboard/"
          />
          <ProjectCard
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
