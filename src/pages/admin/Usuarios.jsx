import React,{useEffect,useState} from 'react'
import { obtenerUsuarios } from 'utils/api'
import { nanoid } from 'nanoid';
import { editarUsuario } from 'utils/api';
import PrivateComponent from 'components/PrivateComponent';

const Usuarios = () => {
    const [usuarios,setUsuarios]=useState([])

    useEffect(() => {
        const fetchUsuarios=async()=>{
            await obtenerUsuarios(
                (respuesta)=>{
                    console.log("usuariosssssss",respuesta.data)
                    setUsuarios(respuesta.data)
                },
                (err)=>{
                    console.log(err)
                }
            
            )
        }
        fetchUsuarios()
    }, [])


    return (
        <div>
          <div>admin usuarios</div>
          <PrivateComponent roleList={['admin','sin rol']}>
              hola RBAC
          </PrivateComponent>
        
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user) => {
                return (
                  <tr key={nanoid()}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <RolesUsuario user={user} />
                    </td>
                    <td>
                      <RolesUsuario user={user} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };

const  RolesUsuario=({user})=>{
    const [rol,setRol]=useState(user.rol)

    useEffect(() => {
        const editUsuario=async()=>{
            await editarUsuario(user.id,{rol},(res)=>{console.log(res)},(err)=>{console.error(err)})

        }
        if(user.rol !==rol){
            editUsuario()
        }
        editUsuario()
    }, [rol,user])
    
    return(
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="vendedor">Vendedor</option>
            <option value="inactivo">Inactivo</option>
        </select>
    )
}

export default Usuarios
