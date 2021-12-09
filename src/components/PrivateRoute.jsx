
import React,{useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated,isLoading,getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token =async()=>{
// Si se quieren hacer valiaciones con el token
//      if(localStorage.getItem('token')){
//        //valodar fecha de expiracion del token
//      } else{
        //pedir token
//      }
      const accessToken= await getAccessTokenSilently({
      audience: `api-autenticacion-consesionario-mintic`,
    })
    localStorage.setItem("token",accessToken)
    console.log(accessToken)
    }
    if (isAuthenticated){
    fetchAuth0Token()
    }
  }, [isAuthenticated,getAccessTokenSilently])

  if (isLoading) return <div>Loading....</div>

  return isAuthenticated ?(
  <>{children}</>
  ):( 
      <div>
        <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>
        <Link to='/'>
            llevame al home
            </Link>
      </div>
  
  )
};

export default PrivateRoute;
