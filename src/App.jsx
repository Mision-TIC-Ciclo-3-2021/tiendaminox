
import logo from './logo.svg';
import 'styles/styles.css';
import Login from 'pages/Login';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Vehiculos';
import Vehiculos from 'pages/admin/Vehiculos';
import Index from 'pages/Index';
import Registro from 'pages/Registro';
import PublicLayouts from 'layouts/PublicLayouts';
import AuthLayout from 'layouts/AuthLayout';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import route from 'color-convert/route';
import PrivateLayout from 'layouts/PrivateLayout';

function App() {
  return (
    <Router>
      <Switch>

        <Route path={['/admin','/admin/Vehiculos',"/admin/Clientes"]}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/Vehiculos'>
                <Vehiculos/>
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
  );
}

export default App;
