import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>


    <div className="container text-gray-900 mx-auto mx-10 my-10">
      <div className="page p-5">
        <SEO title="404: Not found" />
        <div className="mb-5">
          <h1 className="secondary-heading pr-5">NOT FOUND</h1>
        </div>

        <p className="max-w-3xl my-5">You just hit a route that doesn&#39;t exist... the sadness.</p>

        <Link className="shadow bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white text-sm py-2 px-4 rounded" to="/">Back to Main Page</Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
