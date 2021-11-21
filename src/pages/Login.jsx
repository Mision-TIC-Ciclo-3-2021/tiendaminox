import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../media/logo5.jpg'

const Login = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <Link to="/">
            <img className="h-36" src={logo} />
            </Link>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
                Inicia Sesion en tu cuenta
                </h2>
            <form className="mt-8 max-w-md">
                <div>
                <input className="appeareance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                type='email' 
                placeholder='Correo electronico' 
                required
                />
                <input className="appeareance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                type='password'
                placeholder='Contraseña'  
                required/>
                </div>
                
                <div className="flex justify-between">

                <div>
                <label htmlFor="recuerdame">
                    <input type='checkbox'/>
                    Recuerdame
                </label>
                </div>

                <div>
                    <Link to='/'>
                        Olvidaste tu contraseña
                    </Link>
                </div>

                </div>



                <div className="flex flex-col w-full justify-center items-center bg-blue-700 text-white">
                    <Link to="/admin">
                        <button  type="submit">Iniciar Sesion</button>
                    </Link>
                </div>

                <div className="">
                    ----------------------------O-----------------------------
                </div>

                <div className="flex flex-col w-full justify-center items-center bg-gray-200 text-gray">
                    <button>Continua con google</button>
                </div>

                <div>
                    <ul className="flex w-full justify-between my-3">
                        <li>¿No tienes cuenta?</li>
                        <Link to="/registro">
                            Regístrate
                        </Link>
                    </ul>
                </div>

            </form>
        </div>
    )
}

export default Login
