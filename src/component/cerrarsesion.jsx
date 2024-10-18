import React from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logout from "../services/logout";

function CerrerSeccion({handerClick}) {
    const navigate = useNavigate();

    const cerrarsession = (e) => {
        e.preventDefault();
        logout().then((res)=>{
            handerClick(e)
        })
    }

    return (
        <>
            <Link onClick={cerrarsession} className="font-medium text-indigo-600 hover:text-indigo-500 botton-cerrar">cerrar sesion</Link>
        </>


    )
}

export default CerrerSeccion