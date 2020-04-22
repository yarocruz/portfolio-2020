import React from "react"

import Intro from "../components/intro";
import ProjectCard from "../components/projectCard";

import "../assets/tailwind.css"

const IndexPage = () => (
  <div className="container text-gray-900 mx-auto mx-10 my-10">
    <div className="p-6">
      <Intro />

      <h1 className="mb-5 secondary-heading">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ProjectCard title="Eat Da Burger" />
        <ProjectCard title="Code Quiz" />
        <ProjectCard title="Weather Dashboard" />
        <ProjectCard title="Poddler" />
        <ProjectCard title="Code Quiz" />
        <ProjectCard title="Some Other" />
      </div>

    </div>
  </div>
)

export default IndexPage
