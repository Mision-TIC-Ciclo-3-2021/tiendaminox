
import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import React,{useEffect} from 'react'
import PrivateRoute from 'components/PrivateRoute'
import { useAuth0 } from '@auth0/auth0-react'


const PrivateLayout = ({children}) => {
    const {user,isAuthenticated,isLoading} =useAuth0();

    useEffect(() => {
        console.log(user,isAuthenticated,isLoading)
    }, [user,isAuthenticated,isLoading])

    
    return (
        <PrivateRoute>
        <div className="flex flex-col md:flex-row w-screen h-screen">
            <Sidebar/>
            <SidebarResponsive/>
            <main px-2 className="flex w-full bg-blue-400 overflow-y-scroll items-center justify-center" >{children}</main>
            
        </div>
        </PrivateRoute>
    )
}

export default PrivateLayout
