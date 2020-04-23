import React from "react"

import Intro from "../components/intro";
import ProjectCard from "../components/projectCard";
import ContactForm from "../components/contactForm";

import "../assets/tailwind.css"

const IndexPage = () => (
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
        />
        <ProjectCard title="Eat Da Burger" />
        <ProjectCard title="Weather Dashboard" />
        <ProjectCard title="RPS" />
        <ProjectCard title="Code Quiz" />
        <ProjectCard title="Some Other" />
      </div>

      <ContactForm />
    </div>
  </div>
)

export default IndexPage
