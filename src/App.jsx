import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'styles/styles.css';
import Login from 'pages/Login';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Vehiculos';
import Vehiculos from 'pages/admin/Vehiculos';
import Ventas from 'pages/admin/Ventas';
import Index from 'pages/Index';
import Registro from 'pages/Registro';
import PublicLayouts from 'layouts/PublicLayouts';
import AuthLayout from 'layouts/AuthLayout';
import './App.css';
import 'styles/styles.css'
import { DarkModeContext } from 'context/darkMode';
import { Auth0Provider } from "@auth0/auth0-react";
import Usuarios from 'pages/admin/Usuarios';



import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import route from 'color-convert/route';
import PrivateLayout from 'layouts/PrivateLayout';
import { UserContext } from 'context/userContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData,setUserData]=useState({})
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (

  <Auth0Provider
    domain="misiontic-consesionario.us.auth0.com"
    clientId="ayl787O3iKDHyEcMB451VeGZ7b6H5A1E"
    redirectUri='http://localhost:3000/admin'
    audience= 'api-autenticacion-consesionario-mintic'
  >
  <div className="App">
    <UserContext.Provider value={{userData,setUserData}}>
  <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
    <Router>
      <Switch>

        <Route path={['/admin','/admin/Vehiculos',"/admin/Ventas","/admin/usuarios","/admin/Clientes"]}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/Vehiculos'>
                <Vehiculos/>
              </Route>
              <Route path='/admin/Ventas'>
                <Ventas/>
              </Route>
              <Route path='/admin/usuarios'>
                <Usuarios/>
              </Route>
              <Route path='/admin/Clientes'>
                <Clientes/>
              </Route>
              <Route path="/admin">
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        
        
        <Route path={['/login','/registro']}>
          <AuthLayout>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/registro">
                <Registro/>
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        
        
        <Route>
          <PublicLayouts>
            <Switch>
              <Route path="/">
                <Index/>
              </Route>
            </Switch>

          </PublicLayouts>
        </Route>
      </Switch>
    </Router>
  
  </DarkModeContext.Provider>
  </UserContext.Provider>
  </div>
  </Auth0Provider>
  
  );
}

export default App;
