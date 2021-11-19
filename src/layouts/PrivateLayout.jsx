import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar/>
            <main>{children}</main>
            
        </div>
    )
}

export default PrivateLayout
