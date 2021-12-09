import React from 'react'
import Login from 'pages/Login'
import { Link } from 'react-router-dom'
import TriggerDarkMode from './TriggerDarkMode'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <nav className="bg-gray-500">
            <ul className="flex w-full justify-between my-3">
                <li>Logo</li>
                <li>Navegacion 1</li>
                <li>Navegacion 2</li>
                <li>
                    <TriggerDarkMode/>
                </li>
                <li className='px-3'>

        
                    <button onClick={() => loginWithRedirect()} 
                    className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
                        Iniciar Sesion
                    </button>
           
                
                
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
