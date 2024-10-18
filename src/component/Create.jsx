import React from "react"

import { Link } from "react-router-dom";


function Create (pk) {
    return (
        <>
            <Link to={`/create/`} className="font-medium text-indigo-600 hover:text-indigo-500">create</Link>
        </>


    )
}

export default Create