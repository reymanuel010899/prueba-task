import React from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import delete_task from "../services/Eliminar";

function Delete (pk) {
    const navigate = useNavigate();
    const hanclerClick = (e) => {
        e.preventDefault();
        delete_task(pk.pk).then((res)=>{
            navigate('/');
        })
        
    }

    return (
        <>
                <Link onClick={hanclerClick} className="font-medium text-indigo-600 hover:text-indigo-500 botton-delete">Delete</Link>
        </>


    )
}

export default Delete