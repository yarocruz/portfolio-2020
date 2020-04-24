import React from "react"
import { Link } from "gatsby"

const WIPPage = () => (
    <div className="container text-gray-900 mx-auto mx-10 my-10">
        <div className="page p-5">
            <div className="mb-5">
                <h1 className="secondary-heading pr-5">WIP</h1>
            </div>

            <p className="max-w-3xl my-5">This page is currently under construction. To see the projects go back to the projects page and click the Github or demo link icons.</p>

            <Link className="shadow bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white text-sm py-2 px-4 rounded" to="/">Go back to the homepage</Link>
        </div>
    </div>
)

export default WIPPage