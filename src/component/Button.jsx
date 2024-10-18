import React from "react"
import { Navigate } from 'react-router'
import update_task from "../services/Update"
import { Link } from "react-router-dom";


function Button (pk) {
    const hanclerClick = (e, pk) => {
        e.preventDefault();
        return <Navigate to={`/update/${pk}`} />;
        // update_task(pk.pk)
    }

    return (
        <>
                <Link to={`/update/${pk.pk}`} className="font-medium text-indigo-600 hover:text-indigo-500">Update</Link>
        </>


    )
}

export default Button