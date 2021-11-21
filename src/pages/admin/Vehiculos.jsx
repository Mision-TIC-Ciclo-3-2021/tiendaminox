import React, { useEffect,useState } from 'react'

const Vehiculos = () => {
    const[nombreVehiculo, setNombreVehiculo]=useState('')

    const enviarDatosAlBackend = ()=>{
        console.log('El valor de la variable nombre vehiculo es: ', nombreVehiculo)
    }
//    useEffect(,[])

    return (
        <form className="flex flex-col">
            <h2>Formulario de creación de vehiculos</h2>
            <input onChange={(e)=>{setNombreVehiculo(e.target.value)}} type='text' placeholder='Nombre del vehiculo'/>
            <input type='text' placeholder='Marca del vehiculo'/>
            <input type='text' placeholder='Modelo del vehiculo'/>
            <button type='button' onClick={enviarDatosAlBackend} className="bg-indigo-500 text-white">Enviar datos</button>
        </form>
    )
}

export default Vehiculos
