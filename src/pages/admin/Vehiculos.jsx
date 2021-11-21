import React, { useEffect,useState } from 'react'

const vehiculosBackend=[
    {
        nombre:"Corolla",
        marca: "Toyota",
        modelo: 2014,

    },
    {
        nombre:"Corolla",
        marca: "Susuki",
        modelo: 2014,

    },
    {
        nombre:"Corolla",
        marca: "Mazda",
        modelo: 2014,

    },
    {
        nombre:"Corolla",
        marca: "Honda",
        modelo: 2014,

    },
];


const Vehiculos = () => {

    const [mostrarTabla,setMostrarTabla]= useState(true)
    const [vehiculos,setVehiculos]=useState([])
    const [textoBoton,setTextoBoton]= useState('crear Nuevo vehiculo ')

    useEffect(()=>{
        setVehiculos(vehiculosBackend)
    },[])

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Crear nuevoo vehicuolo")
        } else{
            setTextoBoton("Mostrar todos los vehiculos")
        }
    }, [mostrarTabla]);

    return (
        <div className="flex h-full w-full flex-col items-center justify-start p-8">
            <div clasName="flex flex-col">
                
            <h2 className="text-3xl font-extrabold text-gray-900">Pagina de administracion de vehiculos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} 
            className="text-white bg-indigo-500 p-5 rounded-full w-28 self-end">
                {textoBoton}
            
            </button>
            </div>
            {mostrarTabla ? 
                <TablaVehiculos listaVehiculos={vehiculos}/>:
                <FormularioCreacionVehiculos/>
            }
            
            
        </div>
    )
}

const TablaVehiculos = ({listaVehiculos})=>{
    useEffect(()=>{
        console.log("Este es el listado de vehiculos en el componente de tabla", listaVehiculos)
    },[listaVehiculos])
    
    return(
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-extrabold">Todos los vehiculos</h2>
        <table>
            <thead>
               <tr>
                   <th>Nombre del vehiculo</th>
                   <th>Marca</th>
                   <th>Modelo del vehiculo</th>
                </tr> 
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{
                    return(
                        <tr>
                            <td>{vehiculo.nombre}</td>
                            <td>{vehiculo.marca}</td>
                            <td>{vehiculo.modelo}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>            
        </div>

    )
}

const FormularioCreacionVehiculos = () =>{
    return(
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold">Crear nuevo vehiculo</h2>
            <form className="grid grid-cols-2">
                <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" />
                <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" type="text" />
                <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" type="text" />
                <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" type="text" />
                <button className="col-span-2 bg-green-400 p-2 rounded-full">Guardar vehiculo</button>
            </form>
        </div>
    )
}

export default Vehiculos


