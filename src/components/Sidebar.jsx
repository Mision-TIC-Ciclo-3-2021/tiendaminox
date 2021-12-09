import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link,useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useActiveRoute from 'hooks/useActiveRoute'
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './PrivateComponent'

const Sidebar = () => {
    const { user, logout } = useAuth0();
    

    
    
    const cerrarSesion=()=>{
        logout({returnTo:'http://localhost:3000/admin'})
        localStorage.setItem('token',null)
    }

    return (
        <div>
            <nav className='hidden md:flex md:w-72 lg:flex border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar'>
                sidebar
                <Link to="/admin">
                    <ImagenLogo/>
                </Link>
                
                <div className="my-4">
                <Ruta icono="fas fa-user" ruta="/admin/profile" nombre="Perfil" usuario={user}/>
                <Ruta icono="fas fa-car" ruta="/admin/vehiculos" nombre="Vehiculos"/>
                <Ruta icono="fas fa-cash-register" ruta="/admin/ventas" nombre="Ventas"/>
                <Ruta icono="fas fa-users" ruta="/admin/usuarios" nombre="Usuarios"/>
                </div>
                <button onClick={() => cerrarSesion()}>Cerrar sesión</button>
            </nav>

        </div>
    )
}

const Ruta = ({ icono, ruta, nombre,usuario}) => {
    console.log('usuario',usuario)
    const isActive=useActiveRoute(ruta)

    return(
        <Link to={ruta}>
        <button className={`p-2 my-2 bg-${isActive ? 'indigo': 'gray'}-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
        >
            {usuario ? (
                <>
                <img src={usuario.picture} className="h-5 w-5 rounded-full"/>
                {usuario.name}
                </>
            ):(
                <>
            <i className={`${icono} w-10`}/>
            {nombre}
            </>
            )}

        </button>
        </Link>
    )
    }

export default Sidebar
