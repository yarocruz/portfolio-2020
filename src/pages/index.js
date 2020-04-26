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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ProjectCard
            title="Poddler"
            githubLink="https://github.com/yarocruz/project-2"
            demoLink="https://sheltered-gorge-46855.herokuapp.com/"
            description="Poddler is a user driven Podcast Directory for podcast enthusiasts."
            tech={["Express", "Handlebars", "Tailwindcss"]}
            pageRoute="/poddler/"
          />
          <ProjectCard
            title="Eat Da Burger"
            githubLink="https://github.com/yarocruz/eat-da-burger"
            demoLink="https://aqueous-beyond-86348.herokuapp.com/"
            description="Eat Da Burger is a full stack web application that lets you add burgers and then devour them like an animal."
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
            title="Note Taker"
            githubLink="https://github.com/yarocruz/note-taker"
            demoLink="https://secret-ravine-58567.herokuapp.com/"
            description="Simple note taker app that for adding notes."
            tech={["Nodejs", "Express", "JSON"]}
            pageRoute="/wip/"
          />
          <ProjectCard
            title="Code Quiz"
            githubLink="https://github.com/yarocruz/code-quiz"
            demoLink="https://yarocruz.github.io/code-quiz/"
            description="Quiz app, specifically a code quiz app that tests your knowdlege on web development."
            tech={["HTML", "CSS", "Vanilla JS"]}
            pageRoute="/wip/"
          />
          <ProjectCard
            title="RPS"
            githubLink="https://github.com/yarocruz/rps"
            demoLink="https://yarocruz.github.io/rps/"
            description="Rock, Paper, Scissors game. Math.random, humble beginnings."
            tech={["HTML", "CSS", "Vanilla JS"]}
            pageRoute="/wip/"
          />
        </div>

        <ContactForm />
      </div>
    </div>
  </div>

)

export default IndexPage
