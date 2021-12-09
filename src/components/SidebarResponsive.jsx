import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion]=useState(false)
    return (
    <div className="md:hidden" onClick={()=>{setMostrarNavegacion(!mostrarNavegacion)
    }}
    >
        <img src="https://cdn-icons-png.flaticon.com/512/2844/2844468.png" className={`w-1/6 hover:text-yellow-600`}/>
        {mostrarNavegacion &&
        <ul className="bg-gray-900">
            <ResponsiveRoute nombre="vehiculos" ruta='/admin/vehiculos'/>
            <ResponsiveRoute nombre="Ventas" ruta='/admin/ventas'/>
            <ResponsiveRoute nombre="Usuarios" ruta='/admin/usuarios'/>
        </ul>
        }
    </div>
    )
}

const ResponsiveRoute=({ruta,nombre})=>{
    return (
        <Link to={ruta}>
        <li className="text-gray-200 border border-gray-300 p-2">{nombre}</li>
        </Link>
    )
}

export default SidebarResponsive
