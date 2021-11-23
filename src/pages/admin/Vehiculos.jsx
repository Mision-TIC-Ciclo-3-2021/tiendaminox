import React, { useEffect,useState,useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    const [colorBoton,setColorBoton]=useState('indigo')

    useEffect(()=>{
        setVehiculos(vehiculosBackend)
    },[])

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Crear nuevoo vehicuolo")
            setColorBoton('indigo')
        } else{
            setTextoBoton("Mostrar todos los vehiculos")
            setColorBoton('red')
        }
    }, [mostrarTabla]);

    return (
        <div className="flex h-full w-full flex-col items-center justify-start p-8">
            <div clasName="flex flex-col">
                
            <h2 className="text-3xl font-extrabold text-gray-900">Pagina de administracion de vehiculos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} 
            className={`text-white bg-${colorBoton}-500 p-5 rounded-full w-28 self-end`}>
                {textoBoton}
            
            </button>
            </div>
            {mostrarTabla ? (
                <TablaVehiculos listaVehiculos={vehiculos}/>
    ):(
                <FormularioCreacionVehiculos
                setMostrarTabla={setMostrarTabla}
                listaVehiculos={vehiculos}
                setVehiculos={setVehiculos}
                />

                
    )}
            <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            />
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

const FormularioCreacionVehiculos = ({
    setMostrarTabla,
    listaVehiculos,
    setVehiculos,
})=>{
    
    const form = useRef(null)

    const submitForm = (e)=>{
        e.preventDefault()
        const fd=new FormData(form.current)
        
        const nuevoVehiculo = {}
        fd.forEach((value,key)=>{
            nuevoVehiculo[key]=value
        })
        setMostrarTabla(true)
        setVehiculos([...listaVehiculos,nuevoVehiculo])
        toast.success("vehiculo aregadp con exito")


    }
    return(
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold">Crear nuevo vehiculo</h2>
            <form ref={form} onSubmit={submitForm} className="flex flex-col">
                <label className="flex flex-col" htmlFor="nombre">Nombre del vehiculo
                <input name='nombre' className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
                type="text" 
                placeholder="corolla"
                required
                />
                </label>

                <label className="flex flex-col" htmlFor="marca">Marca del vehiculo
                <select name='marca' 
                className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
                required
                defaultValue={0}
                >
                

                    <option disabled value={0} >Seleccione una opción</option>
                    <option>Renualt</option>
                    <option>Toyota</option>
                    <option>Ford</option>
                    <option>Mazda</option>
                    <option>Chevrolet</option>
                </select>

                <label className="flex flex-col" htmlFor="modelo">Modelo del vehiculo
                <input name='modelo' className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
                type="number" 
                min={1992}
                max={2022}
                placeholder="2014"
                required
                />
                </label>

                </label>

                <button type="submit" className="col-span-2 bg-green-400 rounded-full shadow-md hover:bg-green-600 text-white"
                >
                    Guardar vehiculo
                </button>
               
            </form>
        </div>
    )
}



export default Vehiculos


